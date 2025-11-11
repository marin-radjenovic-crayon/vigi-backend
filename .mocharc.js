// process.env.NODE_ENV = 'test';

module.exports = {
  exit: true,
  bail: false,
  slow: 1000,
  recursive: true,
  require: ['./test/_setupTestsHook.js'],
  timeout: '5000',
  globals: "global",
  exclude: [
    "test/load_testing/**"
  ]
}
