# Next.js Boilerplate

Created by [@andrewizbatista](https://github.com/andrewizbatista)

This is a very opinionated Next.js starting boilerplate I use it as a base for the majority of my React projects.
I try to always keep this repo up to date with the libraries and practices I think are best and better fit my coding style, but feel free to use it on your own projects and if you like you can always contact me with any questions.

## Getting Started

### Prerequisites

- nodejs `v12.16+`
- npm `v6.14+`

### Installing

1. Install all the project dependencies:

```
npm install
```

2. Run the project on your machine:

```
npm run dev
```

### Folder Structure

- `.next` - [Next.js](https://nextjs.org/) auto-generated configs.
- `.plop` - [Plop](https://plopjs.com/) generators.
- `.storybook` - [Storybook](https://storybook.js.org/) configs.
- `components` - all the app components.
- `out` - production ready exported files.
- `pages` - all the app routes.
- `public` - static files that are served to the client.
- `src` - code that makes the app running (scripts, configs, helpers, etc...).
- `types` - [TypeScript](https://www.typescriptlang.org/) type declarations.

## Tooling

I use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain the code quality, [Plop](https://plopjs.com/) to quickly scaffold some of the project elements (components, pages, etc...) and [Storybook](https://storybook.js.org/) to test and quickly iterate the development of React Components.

### Plop Generators

Create a new **Component**:

```
npm run generate component
```

Create a new **Page**:

```
npm run generate page
```

### Storybook

```
npm run storybook
```

## Deployment

To create a production ready build, run:

```
npm run export
```

Then deploy the generated files from the `/out` folder.

## Built With

- [TypeScript](https://www.typescriptlang.org/) - JavaScript Superset
- [React.js](https://reactjs.org/) - Web Framework
- [Next.js](https://nextjs.org/) - React Framework
- [Material UI](https://material-ui.com/) - UI Framework

## Authors

- **André Batista** - [@andrewizbatista](https://github.com/andrewizbatista)
