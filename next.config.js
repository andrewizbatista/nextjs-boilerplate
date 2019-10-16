module.exports = {
  webpack: (config) => {
    const entryOriginal = config.entry;

    config.entry = async () => {
      const entries = await entryOriginal();

      const mainJS = entries['main.js'];
      const polyfills = './app/polyfills.ts';

      if (mainJS && !mainJS.includes(polyfills)) {
        entries['main.js'].unshift(polyfills);
      }

      return entries;
    };

    config.resolve.modules.push('.'); // resolve root imports

    return config;
  },
  exportPathMap: (defaultPathMap) => {
    let pathMap = defaultPathMap;

    // insert code that generates the routes

    return pathMap;
  },
};
