import { combineEpics } from 'redux-observable';

import { epic as auth } from './entities/auth';
import { epic as cars } from './entities/cars';
import { epic as enquiries } from './entities/enquiries';
import { epic as customers } from './entities/customers';
import { epic as constants } from './entities/constants';

export default combineEpics(auth, cars, enquiries, customers, constants);
