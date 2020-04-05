/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./component');
const pageGenerator = require('./page');

const plopConfig = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
};

module.exports = plopConfig;
