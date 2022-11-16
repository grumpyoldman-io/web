const fg = require('fast-glob');
const { resolve } = require('path');

module.exports = (config) => {
  config.output.exports = 'default';

  config.plugins.push({
    name: 'watch-css',
    async buildStart() {
      const files = await fg(resolve(__dirname, 'src/**/*.css'));
      files.forEach((file) => this.addWatchFile(file));
    },
  });

  return config;
};
