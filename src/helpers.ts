import config from './config';
import { windowExists } from 'storejars-react-toolkit';

export function formatPrice(price: string | number) {
  try {
    return '\u20A6' + price.toLocaleString('en');
  } catch (ex) {
    return price;
  }
}

export function notYetInUse(data) {
  return data.toLocaleString('en');
}

export function userData() {
  try {
    const cache = window.localStorage.getItem(config.LOCAL_STORAGE_KEY);

    return JSON.parse(cache);
  } catch (ex) {
    return { _id: '', email: '' };
  }
}

export function carLink(item) {
  const { make, model, year, shortId } = item;
  return (
    windowExists.location.origin +
    '/car/' +
    make.replace(/\s+/g, '-').toLowerCase() +
    '-' +
    model.replace(/\s+/g, '-').toLowerCase() +
    '-' +
    year +
    '-' +
    shortId
  );
}

export function sparepartLink(name: string, id: string) {
  return windowExists.location.origin + '/sparepart/' + name.replace(/\s+/g, '-').toLowerCase() + '-' + id;
}

export function getCarId(carName) {
  return carName.substr(carName.lastIndexOf('-') + 1);
}
