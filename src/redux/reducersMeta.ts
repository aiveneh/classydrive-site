import { combineReducers } from 'redux';

import { metaReducer as auth } from './entities/auth';
import { metaReducer as cars } from './entities/cars';
import { metaReducer as enquiries } from './entities/enquiries';
import { metaReducer as customers } from './entities/customers';
import { metaReducer as constants } from './entities/constants';

export default combineReducers({
  auth,
  cars,
  enquiries,
  customers,
  constants,
});
