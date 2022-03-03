/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { basePath } = require('./app.config');

// eslint-disable-next-line no-undef
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: basePath,
};
