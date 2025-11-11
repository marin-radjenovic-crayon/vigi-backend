const fs = require('fs');
const modelsPath = `${__dirname}/`;
const { removeExtensionFromFile } = require('../middleware/utils');

module.exports = () => {
  /*
   * Load models dynamically
   */

  // Loop models path and loads every file as a model except this file
  fs.readdirSync(modelsPath).filter(file => {
    // Take filename and remove last part (extension)
    const modelFile = removeExtensionFromFile(file);
    const model = modelFile !== 'index' ? require(`./${modelFile}`) : '';
    // Prevents loading of this file
    // models.push(model);
    return model;
  });
};
