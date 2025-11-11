const flat = require('flat');
const _ = require('lodash');

const flatThis = (data, ignoreArr) => {
  const notFlattenData = {};
  if (ignoreArr && ignoreArr.length) {
    ignoreArr.forEach(item => {
      notFlattenData[item] = _.cloneDeep(data[item]);
      delete data[item];
    });
  }

  //safe to preserve arrays!!!!!
  const flatThis = flat(data, { safe: true });

  return {
    ...flatThis,
    ...notFlattenData
  };
};

module.exports = flatThis;
