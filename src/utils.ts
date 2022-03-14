import config from './config';
import { tokenStorage } from './redux/helpers';

export { resizeImage, formatPrice } from 'storejars-react-toolkit';

export function getAsset(asset: string) {
  return config.basePath + '/' + asset;
}

export function isLoggedIn() {
  try {
    const { expires, token } = tokenStorage.get();

    if (expires && token) {
      const dateInMilliSeconds = new Date().getTime();
      const expiresInMilliseconds = expires * 1000;

      if (dateInMilliSeconds > expiresInMilliseconds) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
