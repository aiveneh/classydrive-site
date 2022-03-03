import { combineEpics } from 'redux-observable';

import { epic as auth } from './entities/auth';
import { epic as cars } from './entities/cars';
import { epic as enquiries } from './entities/enquiries';
import { epic as serviceRequests } from './entities/serviceRequests';
import { epic as services } from './entities/services';
import { epic as spareparts } from './entities/spareparts';
import { epic as users } from './entities/users';
import { epic as constants } from './entities/constants';

export default combineEpics(auth, cars, enquiries, serviceRequests, services, spareparts, users, constants);
