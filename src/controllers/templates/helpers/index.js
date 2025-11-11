const { getAllItemsFromDB } = require('./getAllItemsFromDB');

const getClientTemplateDirectory = templateName => {
  const prefix = templateName.split('_')?.[0];
  if (prefix === 'staticmedia' || prefix === 'staticslide') {
    return 'worldcup/';
  }
  if (prefix === 'wc') {
    return 'worldcup/';
  }
  if (prefix === 'tm') {
    return 'transfermarkt/';
  }
  if (prefix === 'fcb') {
    return 'fcb/';
  }
  if (prefix === 'bild') {
    return 'bild/';
  }
  if (prefix === 'of') {
    return 'of/';
  }
  return '';
};

module.exports = {
  getAllItemsFromDB,
  getClientTemplateDirectory
};
