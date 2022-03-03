import { combineReducers } from 'redux';

import { metaReducer as auth } from './entities/auth';
import { metaReducer as cars } from './entities/cars';
import { metaReducer as enquiries } from './entities/enquiries';
import { metaReducer as serviceRequests } from './entities/serviceRequests';
import { metaReducer as services } from './entities/services';
import { metaReducer as spareparts } from './entities/spareparts';
import { metaReducer as users } from './entities/users';

import { metaReducer as constants } from './entities/constants';

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
