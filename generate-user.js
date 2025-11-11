const puppeteer = require('puppeteer');
const bcrypt = require('bcrypt');





(async () => {
  const argv = {};
  process.argv.forEach((val, index, array) => {
    if (index > 1) {
      const splitted = val.split('=');
      argv[splitted[0]] = splitted[1];
    }
  });

  // console.log('argv', argv);

  const SALT_FACTOR = 5;
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    bcrypt.hash(argv.pass, salt, (error, newHash) => {
      console.log('newHash', newHash);
    });
  });


})();

