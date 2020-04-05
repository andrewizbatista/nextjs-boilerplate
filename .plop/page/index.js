/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const pagesPath = path.resolve(__dirname, '../../pages');
const templateFiles = ['page.tsx'];

const pageGenerator = {
  description: 'Create a new page.',
  prompts: [
    {
      type: 'input',
      name: 'pageName',
      message: 'What should be the name of the page?',
      default: 'unnamed',
      validate: (userInput) => {
        const existingPages = fs.readdirSync(pagesPath);

        if (!/.+/.test(userInput)) {
          return 'You must provide a valid name.';
        }

        if (existingPages.indexOf(userInput) >= 0) {
          return 'That page already exists.';
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
        path: path.join(pagesPath, '{{pathCase pageName}}.tsx'),
        templateFile: `./page/${filename}.hbs`,
        abortOnFail: true,
      });
    });

    return actions;
  },
};

module.exports = pageGenerator;
