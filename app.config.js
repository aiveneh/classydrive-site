/* eslint-disable no-undef */
const CDN = '';
const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? CDN : '';

module.exports = {
  CDN,
  isProd,
  basePath,
};
