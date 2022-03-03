import { CDN, isProd, basePath } from '../app.config';

export default {
  BASE_URL: process.env.NEXT_PUBLIC_GATEWAY_URL + '/v1',
  DEFAULT_PP: '/img/user.png',
  LOCAL_STORAGE_KEY: '_re7fe&feAr',
  TOKEN_STORAGE_KEY: '_rfwew',
  MAX_LOGIN_ATTEMPTS: 5,
  LOCK_TIME: 2 * 60 * 60 * 1000,
  isProd,
  CDN,
  basePath,
};
