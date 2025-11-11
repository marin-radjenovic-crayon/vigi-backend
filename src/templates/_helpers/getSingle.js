const { format, compareAsc } = require('date-fns');
const TemplatesRecordsM = require('../../models/template_records');
const MediaM = require('../../models/media');
const SetupM = require('../../models/setup');
const { handleError } = require('../../middleware/utils');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const _ = require('lodash');
const FnFeedsClass = require('../../controllers/feeds/opta/functions');

module.exports = async function (options) {
  const initialData = options.initialData;

  const { res, req, templateconf, getDynamicData, template } = this;
  let err = null;
  const uuid = req.params.uuid;
  const time = format(new Date(), 'HH_mm_ss d/L');

  const name = `${templateconf?.label} (${time})`;

  const setupGeneral = await getItem({ id: 1 }, SetupM).catch(setupGetErr => {
    handleError(res, setupGetErr);
  });
  const defaultBackground = _.get(setupGeneral, 'data.design.defaultBackground');
  const defaultBackgroundMask = _.get(setupGeneral, 'data.design.defaultBackgroundMask');
  const defaultColor1 = _.get(setupGeneral, 'data.design.defaultColor1');
  const defaultColor2 = _.get(setupGeneral, 'data.design.defaultColor2');

  const defaultVideoDuration = _.get(MAINCONFIG, 'videoproduction.defaultVideoDuration');

  if (uuid === '0') {
    const initial = {
      ...initialData,
      name,
      template_name: template,
      data: {
        ...initialData.data,
        preview: initialData?.preview,
        options: await Promise.all(
          _.map(initialData.data.options, async (value, key) => {
            if (value.id === 'name') {
              _.set(value, 'value', name);
            }

            if (value.id === 'defaultBackground') {
              _.set(value, 'value', defaultBackground);
            }

            if (value.id === 'defaultBackgroundMask') {
              _.set(value, 'value', defaultBackgroundMask);
            }

            if (value.id === 'color1') {
              if (!_.get(value, 'value')) {
                _.set(value, 'value', defaultColor1);
              }
            }

            if (value.id === 'color2') {
              if (!_.get(value, 'value')) {
                _.set(value, 'value', defaultColor2);
              }
            }

            if (value.id === 'videoduration') {
              _.set(value, 'value', defaultVideoDuration);
            }
            return value;
          })
        ).catch(err => {
          LOGGER.error(err);
        })
        // dynamic: getDynamicData.call(this),
      },
      season: MAINCONFIG.season
    };
    res.status(200).json(initial);
  } else {
    let output = await getItem(
      {
        uuid,
        template_name: template
      },
      TemplatesRecordsM
    ).catch(error => {
      err = error;
    });

    if (err) {
      output = err;
    }

    res.status(200).json(output);
  }
};
