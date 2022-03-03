import { combineReducers } from 'redux';

import { reducer as auth } from './entities/auth';
import { reducer as cars } from './entities/cars';
import { reducer as enquiries } from './entities/enquiries';
import { reducer as serviceRequests } from './entities/serviceRequests';
import { reducer as services } from './entities/services';
import { reducer as spareparts } from './entities/spareparts';
import { reducer as users } from './entities/users';

import { reducer as constants } from './entities/constants';

export default combineReducers({
  auth,
  cars,
  enquiries,
  serviceRequests,
  services,
  spareparts,
  users,
  constants,
});
