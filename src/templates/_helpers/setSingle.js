const { format, compareAsc } = require('date-fns');
const TemplatesRecordsM = require('../../models/template_records');
const MediaM = require('../../models/media');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const _ = require('lodash');

const { createItem, updateItem, upsertItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');
const Screenshot = require('../../../src/controllers/utils/screenshot');
const async = require('async');
const getUserEvent = require('@/src/controllers/functions/getUserEvent');
const { fcbLineupPlayers } = require('@/src/templates/fcb/fcb_lineup/data');


const MAX_WIDTH = 344.5;
const MAX_HEIGHT = 613.6;
function getWrapperDimensions(targetRatio) {
  switch (targetRatio) {
    case 1.78: {
      return {
        width: MAX_HEIGHT,
        height: MAX_WIDTH
      }
    }
    case 0.56: {
      return {
        width: MAX_WIDTH,
        height: MAX_HEIGHT
      }
    }
    case 0.8: {
      return {
        width: MAX_HEIGHT * 0.8,
        height: MAX_HEIGHT
      }
    }

    default: {
      return {
        width: MAX_WIDTH,
        height: MAX_HEIGHT
      }
    }
  }
}

function getLatestFCBLineUp(sampleData, editData) {
  // Keys to preserve from editData
  const preserveKeys = ["blackLen", "blackPos", "currentPos", "grayLen", "grayPos"];

  // Convert editData to a Map for quick lookup
  const editMap = new Map(editData.map(item => [item.id, item]));

  // Build merged array
  const merged = sampleData.map(sampleItem => {
    const existing = editMap.get(sampleItem.id);

    if (!existing) {
      // New item → keep as is
      return { ...sampleItem };
    } else {
      // Existing item → copy all from sampleItem except preserved keys
      const updated = { ...sampleItem };
      for (const key of preserveKeys) {
        if (key in existing) {
          updated[key] = existing[key];
        }
      }
      return updated;
    }
  });

  return merged;
}

const getRatioFromFormat = (format) => {
  let _ratio = 0.56;
  if (format === '1920x1080') _ratio = 1.78;
  if (format === '1200x1500') _ratio = 0.8;
  return _ratio;
}

const getFormatFromRatio = (ratio) => {
  let _format = '1080x1920';
  if (ratio === 1.78) _format = '1920x1080';
  if (ratio === 0.8) _format = '1200x1500';
  return _format;
}

module.exports = async function (options) {
  const initialData = options.initialData;
  const { res, req, templateconf, getDynamicData, template, createManual } = this;
  let err = null;
  const { body } = req;
  const uuid = req.params.uuid;
  let dbTemplate = null;

  //for autoupdate
  let _event = _.get(req, '_event', null);
  const takeScreenshot = _.get(req, '_takeScreenshot', true);
  const _fields = _.get(req, '_fields', null);
  const _options = _.get(req, '_options', null);
  const _origin = _.get(req, '_origin', null);
  const _keyword = _.get(req, '_keyword', null);
  const _saveType = _.get(req, '_saveType', null);
  const _editData = _.get(req, '_editData', null);
  let _currentFormat = _.get(req, '_currentFormat', null);
  _currentFormat = _currentFormat ? _currentFormat : body?.currentFormat
  if (!_currentFormat) {
    const formats = _.get(templateconf, 'formats', []);
    _currentFormat = formats[0];
  }
  //multiple redactors across multiple events
  if (body?.selectedMatchday) {
    _event = body?.selectedMatchday;
  }

  //BODY FORM VARIABLES, to easier access

  const baseData = _.cloneDeep(initialData);
  delete baseData.uuid;

  let newName = _.get(body, 'options.name.value', baseData?.name);

  if (uuid) {
    dbTemplate = await getItem(
      {
        uuid,
        template_name: template
      },
      TemplatesRecordsM
    ).catch(error => {
      handleError(res, error);
    });

    //set previous data from DB RECORD, we could update it later anyway
    baseData.data = _.get(dbTemplate, 'data', {});
    baseData.lang = _.get(dbTemplate, 'lang', null);
  }

  if (newName) {
    _.set(baseData, 'name', newName);
  }

  let setupEvent = await getUserEvent(req);
  setupEvent = setupEvent.data;

  baseData.event = _event ? _event : _.get(setupEvent, 'data.event');

  baseData.season = MAINCONFIG.season;
  // change this to check client instead of template
  const isFCB = template.includes('fcb_');

  if (_.has(body, 'fields')) {
    const fields = body.fields;
    if (Array.isArray(fields)) {
      baseData.data.fields = await Promise.all(
        _.map(baseData.data.fields, async (item) => {
          const matchedField = body.fields.find(f => f.id === item.id);
          const newValue = matchedField?.value ?? null;
          const newStyles = matchedField?.styles ?? null;
          const newData = matchedField?.data ?? null;
          if (item.type === 'media') {
            const mediaUuid = _.get(newValue, 'uuid');
            const updatedMediaEntry = await getItem({ uuid: mediaUuid }, MediaM).catch(err => {
              LOGGER.error(err);
            });
            if (updatedMediaEntry) {
              _.set(item, 'value', updatedMediaEntry);
            }
          } else {
            _.set(item, 'value', newValue);
          }
          _.set(item, 'styles', newStyles);
          if (newData) {
            _.set(item, 'data', newData);
          }
          return item;
        })
      );
    } else {
      baseData.data.fields = await Promise.all(
        _.map(baseData.data.fields, async (item, key) => {
          const newValue = _.get(body, `fields.${item.id}.value`, null);
          const newStyles = _.get(body, `fields.${item.id}.styles`, null);
          const newData = _.get(body, `fields.${item.id}.data`, null);

          if (item.type === 'media') {
            const mediaUuid = _.get(newValue, 'uuid');
            const updatedMediaEntry = await getItem(
              {
                uuid: mediaUuid
              },
              MediaM
            ).catch(err => {
              LOGGER.error(err);
            });

            if (updatedMediaEntry) {
              _.set(item, 'value', updatedMediaEntry);
            }
          } else {
            _.set(item, 'value', newValue);
          }
          if (newData) {
            _.set(item, 'data', newData);
          }
          _.set(item, 'styles', newStyles);

          return item;
        })
      ).catch(err => {
        handleError(res, err);
      });
    }
  }

  //prepare matchday set media by keyword, only when exist
  baseData.data.fields = await Promise.all(
    _.map(baseData.data.fields, async field => {
      if (_fields?.[field.id]) {
        _.set(field, 'value', _fields?.[field.id]);
      }

      if (_keyword) {
        if (template === 'staticmedia' && field.type === 'media') {
          const mediaByKeyword = await getItem(
            {
              label: _keyword
            },
            MediaM
          ).catch(err => {
            LOGGER.error(err);
          });

          if (mediaByKeyword) {
            _.set(field, 'value', mediaByKeyword);
          }
        }
      }
      return field;
    })
  ).catch(err => {
    handleError(res, err);
  });

  const selectedSide = _.find(baseData.data.fields, { id: 'selectedSide' });
  const statsSide = _.find(baseData.data.fields, { id: 'statsSide' });

  //add suffix to name
  if (selectedSide || statsSide) {
    _.set(baseData, 'name', newName + ' ' + _.capitalize(selectedSide?.value || statsSide?.value));
  }

  if (_.has(body, 'options') || _options) {
    baseData.data.options = await Promise.all(
      _.map(baseData.data.options, async (item, key) => {
        const newValue = _.get(body, `options.${item.id}.value`, null);
        const newStyles = _.get(body, `options.${item.id}.styles`, null);

        if (_options?.[item.id]) {
          _.set(item, 'value', _options?.[item.id]);
          if (item.id === 'name') {
            _.set(baseData, 'name', _options?.[item.id]);
          }
        } else {
          if (item.type === 'media') {
            const mediaUuid = _.get(newValue, 'uuid');

            if (mediaUuid) {
              const updatedMediaEntry = await getItem(
                {
                  uuid: mediaUuid
                },
                MediaM
              );

              if (updatedMediaEntry) {
                _.set(item, 'value', updatedMediaEntry);
              }
            }
          } else {
            _.set(item, 'value', newValue);
          }
          _.set(item, 'styles', newStyles);
        }

        return item;
      })
    ).catch(err => {
      handleError(res, err);
    });
  }

  const callOptions = {
    _saveType,
    _origin
  };

  let fcbOriginLayers;
  if (isFCB) {
    // for fcb line up always add up to dated   fields/lineup_players/data
    // console.log('it is fcb: ', template, baseData);
    if (template === "fcb_lineup") {
      const fields = baseData?.data?.fields;
      const lineupField = fields?.find((f) => f.id === 'lineup_players');
      if (lineupField) {
        const data = lineupField.data;
        const latestData = getLatestFCBLineUp(fcbLineupPlayers, data);
        const updatedFields = baseData?.data?.fields?.map(field =>
          field.id === "lineup_players" || field.id === "reserve_players"
            ? { ...field, /* put your updated data here */ data: latestData }
            : field
        );
        _.set(baseData, 'data.fields', updatedFields);

      }
    }
    const editData = _editData || body?.editData;
    if (editData) {
      const existingEditData = _.get(baseData, 'data.editData');
      if (!existingEditData) {
        _.set(baseData, 'data.editData', editData);
      } else {
        _.set(baseData, 'data.editData', _.cloneDeep(editData));
      }
      fcbOriginLayers = editData.layers;
    }
  }

  if (_currentFormat) {
    const prevFormat = _.get(baseData, 'currentFormat');
    if (!prevFormat) {
      _.set(baseData, 'currentFormat', _currentFormat);
    } else {
      _.set(baseData, 'currentFormat', _.cloneDeep(_currentFormat));
    }
  }

  // Since we are calling createScreenshot function manually, we don't need to call createScreenshot for fcb clients.
  // Need another param, skipScreenshot

  const langs = _.get(body, 'langs', []);
  const selectedFormats = _.get(body, 'selectedFormats', []);
  const skipScreenshot = _.get(body, 'skipScreenshot', false);
  if (template === 'fcb_goal') {
    // createManual
    const currentGoalId = _.get(body, 'currentGoalId', null);
    const fcbGoalTemplate = await createManual.call(this, baseData?.event, langs?.[0] ?? 'en', _currentFormat, currentGoalId, fcbOriginLayers);
    return res.status(201).json([fcbGoalTemplate]);
  } else {
    baseData.data.dynamic = await getDynamicData.call(this, baseData, callOptions).catch(err => {
      LOGGER.error(err, 'dynamic data setSingle error');
    });
  }
  if (_.isArray(langs) && langs.length > 0) {
    const createResults = [];

    const newTemplateData = _.cloneDeep(baseData);
    const prevRatio = newTemplateData?.data?.editData?.effects?.ratio; //
    const prevLayerDimension = getWrapperDimensions(prevRatio);
    for (const lang of langs) {
      // update logic for langs, if we have already templates for fcb, need to overwrite instead of creating new.
      const prevLang = _.get(newTemplateData, 'lang', null);
      _.set(newTemplateData, 'lang', lang);
      let createdRecord = null;
      const createdRecords = [];
      // if fcb template with the same name and language exist, overwrite it.
      if (isFCB) {
        const template_name = newTemplateData.template_name;
        if (selectedFormats.length > 0) {
          for (const currentFormat of selectedFormats) {
            _.set(newTemplateData, 'currentFormat', currentFormat);

            // set ratio
            _.set(newTemplateData, 'data.editData.effects.ratio', getRatioFromFormat(currentFormat));
            // set dimensions
            const originLayers = _.cloneDeep(fcbOriginLayers);
            const scaledDimensions = getWrapperDimensions(getRatioFromFormat(currentFormat));
            const updatedLayers = originLayers?.map((layer) => {
              const nonRatioDimensions = layer.nonRatioDimensions;

              const { width: prevWidth, height: prevHeight } = prevLayerDimension;
              const { width: targetWidth, height: targetHeight } = scaledDimensions;
              const { width: nonRatioWidth, height: nonRatioHeight } = nonRatioDimensions;
              const { width: currentWidth, height: currentHeight } = layer.dimensions;
              const newWidth = nonRatioWidth * (targetWidth / prevWidth);
              const newHeight = nonRatioHeight * (targetHeight / prevHeight);
              const yRatio = newHeight / currentHeight;
              const prevCanvasHeight = targetHeight / yRatio;
              const newY = targetHeight / (prevCanvasHeight / layer.nonRatioY)

              const xRatio = newWidth / currentWidth;
              const prevCavnasWidth = targetWidth / xRatio;
              const newX = targetWidth / (prevCavnasWidth / layer.nonRatioX)
              return {
                ...layer,
                dimensions: {
                  width: Math.round(newWidth),
                  height: Math.round(newHeight),
                },
                nonRatioDimensions: {
                  width: Math.round(newWidth),
                  height: Math.round(newHeight),
                },
                x: newX,
                y: newY,
                nonRatioX: newX,
                nonRatioY: newY,
              };
            });
            _.set(newTemplateData, 'data.editData.layers', updatedLayers);

            const isTemplateExist = await getItem({ template_name, lang, currentFormat, "event.eventId": baseData?.event.eventId }, TemplatesRecordsM);
            // getRatioFromFormat
            // depending on the currentFormat, need to update layers dimension and x,y
            if (isTemplateExist) {
              // Update
              const record = await upsertItem({ template_name, lang, currentFormat, "event.eventId": baseData?.event.eventId }, TemplatesRecordsM, { body: newTemplateData }).catch(err => {
                LOGGER.error(err);
              });
              createdRecords.push(record);
            } else {
              // Create
              const record = await createItem(newTemplateData, TemplatesRecordsM).catch(err => {
                LOGGER.error(err);
              });
              createdRecords.push(record);
            }
          }
        } else {
          // original create or save without selectedFormats
          const curFormat = newTemplateData.currentFormat;
          if (!curFormat) {
            // save without selectedFormats
            _.set(newTemplateData, 'currentFormat', getFormatFromRatio(prevRatio));
          }
          const isTemplateExist = await getItem({ template_name, lang, currentFormat: _currentFormat, "event.eventId": baseData?.event.eventId }, TemplatesRecordsM);
          if (isTemplateExist) {
            // Update
            createdRecord = await upsertItem({ template_name, lang, currentFormat: _currentFormat, "event.eventId": baseData?.event.eventId }, TemplatesRecordsM, { body: newTemplateData }).catch(err => {
              LOGGER.error(err);
            });
          } else {
            // Create
            createdRecord = await createItem(newTemplateData, TemplatesRecordsM).catch(err => {
              LOGGER.error(err);
            });
          }
        }

      } else {
        try {
          if (prevLang) {
            if (!uuid) continue;
            createdRecord = await upsertItem({ uuid }, TemplatesRecordsM, { body: newTemplateData }).catch(err => {
              LOGGER.error(err);
            });
          } else {
            createdRecord = await createItem(newTemplateData, TemplatesRecordsM).catch(err => {
              LOGGER.error(err);
            });
          }
        } catch (error) {
          LOGGER.error(error);
        }
      }



      if (takeScreenshot && !skipScreenshot) {

        const createdRecordId = _.get(createdRecord, 'uuid', null);
        const ScreenshotClass = new Screenshot();

        const CreateScreenshots = () => {
          return new Promise(async (resolve) => {
            async.eachSeries(
              _.get(templateconf, 'formats', []),
              (format, callback) => {
                (async () => {
                  const actions = [
                    {
                      templateId: createdRecordId,
                      url: `${MAINCONFIG.frontendUrl}/frontend/screenshot/${template}/${createdRecordId}?format=${format}`,
                      dir: template,
                      format: format,
                      preview: true
                    }
                  ];

                  const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
                    LOGGER.error(err);
                  });

                  LOGGER.debug('actions %o', actions);
                  LOGGER.debug('response %o', response);
                  callback();
                })().catch(err => {
                  callback(err);
                });
              },
              function (err) {
                if (err) {
                  LOGGER.error(err);
                }
                resolve();
              }
            );
          });
        };

        await CreateScreenshots().catch(err => {
          LOGGER.error('setSingle CreateScreenshots err', err);
        });
      }

      if (createdRecord !== null) {
        createResults.push(createdRecord);
      }
      createResults.push(...createdRecords);
    }

    return res.status(201).json(createResults);
  }
  if (_.isUndefined(uuid)) {
    try {
      if (_origin && _keyword) {
        _.set(baseData, 'name', 'Media:' + _keyword);
      }
      const createRecord = await createItem(baseData, TemplatesRecordsM).catch(err => {
        LOGGER.error(err);
      });

      if (takeScreenshot && _origin && !skipScreenshot) {
        const createdRecordId = _.get(createRecord, 'uuid', null);

        const ScreenshotClass = new Screenshot();

        const CreateScreenshots = () => {
          return new Promise(async (resolve, reject) => {
            async.eachSeries(
              _.get(templateconf, 'formats', []),
              (format, callback) => {
                (async () => {
                  //@todo - add one array for all
                  const actions = [
                    {
                      templateId: createdRecordId,
                      url: `${MAINCONFIG.frontendUrl}/frontend/screenshot/${template}/${createdRecordId}?format=${format}`,
                      dir: template,
                      format: format,
                      preview: true
                    }
                  ];

                  const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
                    LOGGER.error(err);
                  });

                  LOGGER.debug('actions %o', actions);
                  LOGGER.debug('response %o', response);

                  callback();
                })().catch(err => {
                  callback(err);
                });
              },
              function (err) {
                if (err) {
                  LOGGER.error(err);
                }
                resolve();
              }
            );
          });
        };

        await CreateScreenshots().catch(err => {
          LOGGER.error('setSingle CreateScreenshots err', err);
        });
      }

      res.status(201).json(createRecord);
    } catch (error) {
      handleError(res, error);
    }
  } else {
    try {
      const createRecord = await upsertItem({ uuid }, TemplatesRecordsM, { body: baseData });
      if (takeScreenshot && !skipScreenshot) {
        const createdRecordId = _.get(createRecord, 'uuid', null);

        const ScreenshotClass = new Screenshot();

        const CreateScreenshots = () => {
          return new Promise(async (resolve, reject) => {
            async.eachSeries(
              _.get(templateconf, 'formats', []),
              (format, callback) => {
                (async () => {
                  //@todo - add one array for all
                  const actions = [
                    {
                      templateId: createdRecordId,
                      url: `${MAINCONFIG.frontendUrl}/frontend/screenshot/${template}/${createdRecordId}?format=${format}`,
                      dir: template,
                      format: format,
                      preview: true
                    }
                  ];

                  const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
                    LOGGER.error(err);
                  });

                  LOGGER.debug('actions %o', actions);
                  LOGGER.debug('response %o', response);

                  callback();
                })().catch(err => {
                  callback(err);
                });
              },
              function (err) {
                if (err) {
                  LOGGER.error(err);
                }
                resolve();
              }
            );
          });
        };

        //in background
        await CreateScreenshots().catch(err => {
          LOGGER.error('setSingle CreateScreenshots err', err);
        });
      }

      res.status(200).json(createRecord);
    } catch (error) {
      handleError(res, error);
    }
  }

};
