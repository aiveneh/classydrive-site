import { RestApi, TokenStorage } from 'storejars-react-toolkit';

import config from '../config';

export const tokenStorage = new TokenStorage(config.TOKEN_STORAGE_KEY);

// TODO, try am extract result from toek storage
export const api = new RestApi(config.BASE_URL, tokenStorage);
