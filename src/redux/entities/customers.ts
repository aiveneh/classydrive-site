import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api, tokenStorage } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.CUSTOMERS);

export const selector = createSelector(entities, (state) => state.customers);
export const metaSelector = createSelector(entitiesMeta, (state) => state.customers);

export const reducer = handleActions(
  {
    [action.read.success]: (state, action$) =>
      produce(state, (draft) => {
        draft.data = action$.payload;
        return draft;
      }),
  },
  { data: [] },
);

export const metaReducer = metas(action);

function createEpic(action$) {
  return action$.pipe(
    ofType(action.create.loading),
    switchMap(({ payload }) => {
      return api.post$('/customers', payload).pipe(
        switchMap(({ response }) => {
          tokenStorage.set(response.data);
          return of(action.createAction(response.data).success);
        }),
        catchError(({ response }) => of(action.createAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(createEpic);
