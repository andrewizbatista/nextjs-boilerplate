/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const componentsPath = path.resolve(__dirname, '../../components');
const templateFiles = ['index.tsx', 'styles.ts', 'index.stories.tsx'];

const componentGenerator = {
  description: 'Create a new component.',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should be the name of the component?',
      default: 'Unnamed',
      validate: (userInput) => {
        const existingComponents = fs.readdirSync(componentsPath);

        if (!/.+/.test(userInput)) {
          return 'You must provide a valid name.';
        }

        if (existingComponents.indexOf(userInput) >= 0) {
          return 'That component already exists.';
        }

        return true;
      },
    },
  ],
  actions: () => {
    const folder = path.join(componentsPath, '{{pascalCase componentName}}');

    const actions = [];

    templateFiles.forEach((filename) => {
      actions.push({
        type: 'add',
        path: path.join(folder, filename),
        templateFile: `./component/${filename}.hbs`,
        abortOnFail: true,
      });
    });

    return actions;
  },
};

module.exports = componentGenerator;
