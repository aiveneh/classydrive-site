import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.CONSTANTS);

export const selector = createSelector(entities, (state) => state.constants);
export const metaSelector = createSelector(entitiesMeta, (state) => state.constants);

export const reducer = handleActions(
  {
    [action.read.success]: (state, action$) =>
      produce(state, (draft) => {
        draft = action$.payload;
        return draft;
      }),
  },
  {
    TransmissionTypes: [],
    ConditionTypes: [],
    VehicleTypes: [],
    VehicleMakeTypes: [],
    FuelTypes: [],
  },
);

export const metaReducer = metas(action);

function readEpic(action$) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(() => {
      return api.get$('/cars/constants/get').pipe(
        switchMap(({ response }) => {
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(readEpic);
