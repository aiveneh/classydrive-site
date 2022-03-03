import config from './config';

export { resizeImage, formatPrice } from 'storejars-react-toolkit';

export function getAsset(asset: string) {
  return config.basePath + '/' + asset;
}
