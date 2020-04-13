/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./component');
const pageGenerator = require('./page');
const helperGenerator = require('./helper');

const plopConfig = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('helper', helperGenerator);
};

module.exports = plopConfig;
