/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const helpersPath = path.resolve(__dirname, '../../src/helpers');
const templateFiles = ['helper.ts'];

const pageGenerator = {
  description: 'Create a new helper function.',
  prompts: [
    {
      type: 'input',
      name: 'helperName',
      message: 'What should be the name of the helper function?',
      default: 'unnamedHelper',
      validate: (userInput) => {
        const existingHelpers = fs.readdirSync(helpersPath);

        if (!/.+/.test(userInput)) {
          return 'You must provide a valid name.';
        }

        if (existingHelpers.indexOf(`${userInput}.ts`) >= 0) {
          return 'That helper function already exists.';
        }

        return true;
      },
    },
  ],
  actions: () => {
    const actions = [];

    templateFiles.forEach((filename) => {
      actions.push({
        type: 'add',
        path: path.join(helpersPath, '{{pathCase helperName}}.ts'),
        templateFile: `./helper/_${filename}.hbs`,
        abortOnFail: true,
      });
    });

    return actions;
  },
};

module.exports = pageGenerator;
