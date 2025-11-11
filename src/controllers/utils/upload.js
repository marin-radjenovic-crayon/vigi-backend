/**
 * Get all items function called by route
 */
const crypto = require('crypto');
const async = require('async');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs-extra');
const tmp = require('tmp');
const mime = require('mime-types');
const { v4: uuidv4 } = require('uuid');
const getTypeByExt = require('../functions/getTypeByExt');
const getFileSize = require('../functions/getFileSize');
const { createItem, updateItem, getItems, checkQueryString } = require('../../middleware/db');
const { findAndDelete } = require('../../middleware/db/deleteItem');
const { isIDGood, handleError } = require('../../middleware/utils');
const _ = require('lodash');

const MediaM = require('../../models/media');
const axios = require('axios');
const { createTemplate } = require('@/src/controllers/actions/handleTemplate');
const { getEventData } = require('@/src/controllers/updater/helpers');

const ProtoClass = function () {
  // console.log('this.conf', global.MAINCONFIG)
};

ProtoClass.prototype.UpdateFiles = async function (req, res) {
  const that = this;
  const { uuid, group } = req.params;

  let dbRecord = null;

  const definedGroup = group || '_default';
  const { label } = req.body;
  req.body = _.omit(req.body, ['label']);

  if (!req.files) {
    req.body = _.omit(req.body, ['file']);
  }

  const fileDetailsDb = {
    label: label || null
  };

  if (!_.isEmpty(req.body)) {
    _.set(fileDetailsDb, 'data', req.body);
  }

  if (req.files && Object.keys(req.files).length) {
    async.mapSeries(
      req.files,
      (file, callback) => {
        const fileMimeType = file.mimetype;

        const fileName = uuid;
        let fileExt = mime.extension(fileMimeType);

        if (fileMimeType === 'audio/mpeg') {
          fileExt = 'mp3';
        }

        const contentType = getTypeByExt(fileMimeType);

        const url = `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}.${fileExt}`)}`;
        const fullUrl = `${APP_FULLURL}/${path.join(
          MAINCONFIG.upload.path,
          definedGroup,
          contentType,
          `${fileName}.${fileExt}`
        )}`;
        const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);

        fs.ensureDir(finalDir, async err => {
          const fullPath = path.join(finalDir, `${fileName}.${fileExt}`);
          // Use the mv() method to place the file somewhere on your server
          let srcFileToMove = file.tempFilePath;

          if (contentType === 'image') {
            srcFileToMove = file.tempFilePath + '_resized';
            await sharp(file.tempFilePath)
              .resize({
                width: 1920,
                height: 1920,
                withoutEnlargement: true,
                fit: 'inside'
              })
              .toFile(srcFileToMove)
              .catch(err => {
                LOGGER.error(err);
              });
          }

          // Use the mv() method to place the file somewhere on your server
          fs.move(srcFileToMove, `${fullPath}`, { overwrite: true }, async err => {
            if (err) {
              handleError(res, err);
            }

            _.extend(fileDetailsDb, {
              uuid: fileName,
              url,
              fullUrl,
              extension: fileExt,
              mime: fileMimeType,
              size: getFileSize(file.size),
              content_type: contentType,
              local_path: path.join('/', MAINCONFIG.upload.path, definedGroup, contentType)
            });

            dbRecord = await updateItem({ uuid }, MediaM, { body: fileDetailsDb }).catch(err => {
              handleError(res, err);
            });

            callback(null, fileDetailsDb);
          });
        });
      },
      (err, results) => {
        if (err) {
          return handleError(res, err);
        }

        res.status(200).json({
          dbRecord
        });
      }
    );
  } else {
    // const dbRecord = await createItem(fileDetailsDb, MediaM);
    dbRecord = await updateItem({ uuid }, MediaM, { body: fileDetailsDb }).catch(err => {
      handleError(res, err);
    });

    res.status(200).json({
      dbRecord
    });
  }
};

ProtoClass.prototype.UploadFiles = async function (req, res) {
  const that = this;
  const { group } = req.params;

  const fileUrls = Array.isArray(req.body.fileUrls) ? req.body.fileUrls : req.body.fileUrls ? [req.body.fileUrls] : [];

  if (fileUrls.length > 0) {
    req.files = req.files || [];

    for (const fileUrl of fileUrls) {
      const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });

      let contentType = response.headers['content-type'];
      if (!contentType) {
        const extFromUrl = path.extname(fileUrl).split('?')[0].replace('.', '');
        contentType = mime.lookup(extFromUrl) || 'application/octet-stream';
      }
      const fileExt = mime.extension(contentType) || 'bin';
      const tmpFile = tmp.fileSync({ postfix: `.${fileExt}` });
      fs.writeFileSync(tmpFile.name, response.data);
      req.files.push({
        mimetype: contentType,
        name: path.basename(fileUrl),
        size: response.data.length,
        tempFilePath: tmpFile.name,
        fromURL: true,
      });
    }
    req.body = {};
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }



  async.mapSeries(
    req.files,
    (file, callback) => {
      const fileMimeType = file.mimetype;

      const fileName = uuidv4();
      let fileExt = mime.extension(fileMimeType);

      if (fileMimeType === 'audio/mpeg') {
        fileExt = 'mp3';
      }

      const contentType = getTypeByExt(fileMimeType);
      const definedGroup = group || '_default';

      const { label } = req.body;

      req.body = _.omit(req.body, ['label']);

      const url = `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}.${fileExt}`)}`;
      const fullUrl = `${APP_FULLURL}/${path.join(
        MAINCONFIG.upload.path,
        definedGroup,
        contentType,
        `${fileName}.${fileExt}`
      )}`;
      const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);

      fs.ensureDir(finalDir, async err => {
        const fullPath = path.join(finalDir, `${fileName}.${fileExt}`);

        let srcFileToMove = file.tempFilePath;

        if (contentType === 'image') {
          srcFileToMove = file.tempFilePath + '_resized';
          if (file.fromURL) {
            await sharp(file.tempFilePath)
            .trim()
            .resize({
              width: 1920,
              height: 1920,
              withoutEnlargement: true,
              fit: 'inside'
            })
            .toFile(srcFileToMove)
            .catch(err => {
              LOGGER.error(err);
            });
          } else {
            await sharp(file.tempFilePath)
              .resize({
                width: 1920,
                height: 1920,
                withoutEnlargement: true,
                fit: 'inside'
              })
              .toFile(srcFileToMove)
              .catch(err => {
                LOGGER.error(err);
              });
          }
        }

        // Use the mv() method to place the file somewhere on your server
        fs.move(srcFileToMove, `${fullPath}`, { overwrite: true }, async err => {
          if (err) {
            handleError(res, err);
          }

          const fileDetailsDb = {
            uuid: fileName,
            label: label || null,
            data: {
              ...req.body
            },
            group: definedGroup,
            url,
            fullUrl,
            extension: fileExt,
            mime: fileMimeType,
            size: getFileSize(file.size),
            content_type: contentType,
            local_path: path.join('/', MAINCONFIG.upload.path, definedGroup, contentType)
          };

          const dbRecord = await createItem(fileDetailsDb, MediaM);

          callback(null, fileDetailsDb);
        });
      });
    },
    (err, results) => {
      if (err) {
        return handleError(res, err);
      }

      res.status(200).json({ files: results });
    }
  );
};

ProtoClass.prototype.GetFiles = async function (req, res) {
  const that = this;
  const { group } = req.params;

  try {
    const query = await checkQueryString(req.query);
    //req.query.limit = 0;
    //if (_.isEmpty(query)) {
    //req.query.limit = 20;
    //}

    const elements = await getItems(req, MediaM, query).catch(err => {
      handleError(res, err);
    });

    //fix relative url for predefined elements
    // elements.docs.map((item, index)=> {
    //   if(item.url.indexOf("://") === -1) {
    //     item.url = `${APP_FULLURL}${item.url}`;
    //     return item;
    //   }
    //
    //   return item;
    // });

    res.status(200).json(elements);
  } catch (error) {
    handleError(res, error);
  }
};

ProtoClass.prototype.DeleteFiles = async function (req, res) {
  const that = this;

  try {
    const body = req.body;
    const response = await findAndDelete(body, MediaM);

    await that.CleanPublicFiles(response.data.deletedEntries);

    res.status(200).json(response);
    //clean up
  } catch (error) {
    handleError(res, error);
  }
};

ProtoClass.prototype.CleanPublicFiles = function (deleted) {
  const that = this;

  return new Promise((resolve, reject) => {
    async.each(
      deleted,
      function (file, callback) {
        const deleteDirPath = path.join(
          APP_ROOT_PATH,
          MAINCONFIG.publicPath,
          file.local_path,
          `${file.uuid}.${file.extension}`
        );
        // Convert fs.remove (which returns a promise) to callback style
        fs.remove(deleteDirPath)
          .then(() => {
            LOGGER.debug('CleanPublicFiles: %s' + deleteDirPath);
            callback(); // Successfully completed, call callback without error
          })
          .catch(err => {
            LOGGER.warn(err);
            callback(err); // There was an error, pass it to callback
          });
      },
      function (err) {
        // This function is called after processing all files, or if an error occurred
        if (err) {
          // Handle the error, possibly reject the promise
          LOGGER.warn(err);
          reject(err);
        } else {
          // All files processed successfully
          resolve();
        }
      }
    );
  });
};

ProtoClass.prototype.DownloadVideo = async function (videoUrl, outputPath) {
  // Ensure the directory exists
  const dir = path.dirname(outputPath);
  try {
    await fs.access(dir);
  } catch (error) {
    await fs.mkdir(dir, { recursive: true }); // Create the directory if it does not exist
  }

  const response = await axios({
    url: videoUrl,
    method: 'GET',
    responseType: 'stream'
  });

  const writer = fs.createWriteStream(outputPath);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', () => {
      // console.log(`Download completed: ${outputPath}`);
      resolve(outputPath); // Resolve with the outputPath on successful finish
    });
    writer.on('error', async error => {
      LOGGER.error(error, `error: ${outputPath}`);
      try {
        await fs.unlink(outputPath); // Attempt to clean up by removing the incomplete file
      } catch (cleanupError) {
        LOGGER.error(cleanupError, `Cleanup failed for: ${outputPath}`);
      }
      reject(error);
    });
  });
};

ProtoClass.prototype.UploadVideoFromUrl = async function ({
  competitionConfig,
  videoUrl,
  definedGroup,
  extension,
  title,
  duration,
  id,
  publishedTime,
  eventId,
  lang,
  createdTime,
  matchDetails,
  additionalDataFields = {}
}) {
  const contentType = 'video';
  const fileName = crypto.randomUUID();
  const fileExt = extension?.replace('.', '');
  const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);
  const filePath = path.join(finalDir, `${fileName}.${fileExt}`);

  // Existing setup...
  let downloadedFilePath;
  try {
    downloadedFilePath = await this.DownloadVideo(videoUrl, filePath);
  } catch (error) {
    console.error(`Error downloading video: ${error.message}`);
    return;
  }

  // This part seems correct; just ensure that `filePath` is accurately used.
  await this.uploadPressboxVideo({
    filePath, // Ensure this is th  e same path as the downloaded file.
    mimeType: 'video/mp4',
    label: title,
    group: definedGroup,
    competitionConfig,
    additionalData: {
      duration,
      lang,
      id,
      publishedTime,
      eventId,
      createdTime,
      matchStatus: matchDetails?.matchStatus || 'Fixture',
      winner: matchDetails?.winner,
      ...additionalDataFields
    }
  });
};

ProtoClass.prototype.UploadVideoFromUrlOlympics = async function ({
  competitionConfig,
  videoUrl,
  definedGroup,
  extension,
  title,
  duration,
  id,
  publishedTime,
  event,
  lang,
  createdTime,
  matchDetails,
  additionalDataFields = {}
}) {
  const contentType = 'video';
  const fileName = crypto.randomUUID();
  const fileExt = extension?.replace('.', '');
  const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);
  const filePath = path.join(finalDir, `${fileName}.${fileExt}`);

  // Existing setup...
  let downloadedFilePath;
  try {
    downloadedFilePath = await this.DownloadVideo(videoUrl, filePath);
  } catch (error) {
    LOGGER.error(error, `Error downloading video`);
    return;
  }

  // This part seems correct; just ensure that `filePath` is accurately used.
  await this.uploadPressboxVideoOlympics({
    filePath, // Ensure this is th  e same path as the downloaded file.
    mimeType: 'video/mp4',
    label: title,
    group: definedGroup,
    competitionConfig,
    event,
    additionalData: {
      duration,
      lang,
      id,
      publishedTime,
      createdTime,
      matchStatus: matchDetails?.matchStatus || 'Fixture',
      winner: matchDetails?.winner,
      ...additionalDataFields
    }
  });
};

ProtoClass.prototype.uploadPressboxVideo = async function ({
  filePath,
  mimeType,
  label,
  group = '_default',
  additionalData = {},
  competitionConfig
}) {
  const fileName = path.basename(filePath);

  let fileExt = mime.extension(mimeType) || path.extname(filePath).substring(1); // Fallback to extension from filePath

  if (mimeType === 'audio/mpeg') {
    fileExt = 'mp3';
  }

  const contentType = getTypeByExt(mimeType); // Fallback to 'other' if not found
  const definedGroup = group;

  const url = `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}`)}`;
  const fullUrl = `${APP_FULLURL}/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}`)}`;
  const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);
  const fullPath = path.join(finalDir, `${fileName}`);

  try {
    await fs.ensureDir(finalDir);
    const fileStats = await fs.stat(fullPath);
    const fileSize = fileStats.size; // Directly use the size property

    const fileDetailsDb = {
      uuid: fileName,
      label: label || null,
      data: additionalData,
      group: definedGroup,
      url,
      fullUrl,
      extension: fileExt,
      mime: mimeType,
      size: fileSize,
      content_type: contentType,
      local_path: `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType)}`
    };

    // Replace with your actual method to create a database record
    await createItem(fileDetailsDb, MediaM);

    const eventData = getEventData({ id: additionalData?.eventId }, competitionConfig);
    const timelineType = additionalData?.matchStatus === 'Played' ? 'post' : 'pre';

    await createTemplate(
      {
        template: 'staticmedia',
        fields: {
          type: 'pressbox',
          background: fileDetailsDb,
          lang: fileDetailsDb?.data?.lang,
          timelineType
        },
        options: {
          name: `PRESSBOX ${fileDetailsDb?.data?.lang} - ${label?.substring(0, 25)}...`,
          videoduration: Number(fileDetailsDb?.data?.duration) + 1 || 15
        }
      },
      eventData,
      false
    );

    return fileDetailsDb; // Return the details of the uploaded file
  } catch (error) {
    LOGGER.error(error, `Upload error`);
    throw error; // Re-throw the error to be handled by the caller
  }
};

ProtoClass.prototype.uploadPressboxVideoOlympics = async function ({
  filePath,
  mimeType,
  label,
  group = '_default',
  additionalData = {},
  event,
  competitionConfig
}) {
  const fileName = path.basename(filePath);

  let fileExt = mime.extension(mimeType) || path.extname(filePath).substring(1); // Fallback to extension from filePath

  if (mimeType === 'audio/mpeg') {
    fileExt = 'mp3';
  }

  const contentType = getTypeByExt(mimeType); // Fallback to 'other' if not found
  const definedGroup = group;

  const url = `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}`)}`;
  const fullUrl = `${APP_FULLURL}/${path.join(MAINCONFIG.upload.path, definedGroup, contentType, `${fileName}`)}`;
  const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.upload.path, definedGroup, contentType);
  const fullPath = path.join(finalDir, `${fileName}`);

  try {
    await fs.ensureDir(finalDir);
    const fileStats = await fs.stat(fullPath);
    const fileSize = fileStats.size; // Directly use the size property

    const fileDetailsDb = {
      uuid: fileName,
      label: label || null,
      data: additionalData,
      group: definedGroup,
      url,
      fullUrl,
      extension: fileExt,
      mime: mimeType,
      size: fileSize,
      content_type: contentType,
      local_path: `/${path.join(MAINCONFIG.upload.path, definedGroup, contentType)}`
    };

    // Replace with your actual method to create a database record
    await createItem(fileDetailsDb, MediaM);

    const eventData = event;

    await createTemplate(
      {
        template: 'staticmedia',
        fields: {
          type: 'system_pressbox',
          background: fileDetailsDb,
          lang: fileDetailsDb?.data?.lang,
          timelineType: 'global'
        },
        options: {
          name: `SYSTEM PRESSBOX ${fileDetailsDb?.data?.lang} - ${label?.substring(0, 25)}...`,
          videoduration: Number(fileDetailsDb?.data?.duration) + 1 || 15
        }
      },
      eventData,
      false
    );

    return fileDetailsDb; // Return the details of the uploaded file
  } catch (error) {
    LOGGER.error(error, `Upload error`);
    throw error; // Re-throw the error to be handled by the caller
  }
};

module.exports = ProtoClass;
