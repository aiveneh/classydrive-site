import { combineReducers } from 'redux';

import { reducer as auth } from './entities/auth';
import { reducer as cars } from './entities/cars';
import { reducer as enquiries } from './entities/enquiries';
import { reducer as customers } from './entities/customers';
import { reducer as constants } from './entities/constants';

export default combineReducers({
  auth,
  cars,
  enquiries,
  customers,
  constants,
});
