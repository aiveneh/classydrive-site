import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api, tokenStorage } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.AUTH);

export const selector = createSelector(entities, (state) => state.auth);
export const metaSelector = createSelector(entitiesMeta, (state) => state.auth);

export const reducer = handleActions(
  {
    [action.create.success]: (state, action$) =>
      produce(state, (draft) => {
        draft = action$.payload;
        return draft;
      }),
  },
  { token: '' },
);

export const metaReducer = metas(action);

// login a vendor, customer or admin creates a token
function createEpic(action$) {
  return action$.pipe(
    ofType(action.create.loading),
    switchMap(({ payload }) => {
      return api.post$('/register', payload).pipe(
        switchMap(({ response }) => {
          tokenStorage.set(response.data);
          return of(action.createAction(response.data).success);
        }),
        catchError(({ response }) => of(action.createAction(responder(response)).error)),
      );
    }),
  );
}

function readEpic(action$) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(({ payload }) => {
      return api.post$('/login', payload).pipe(
        switchMap(({ response }) => {
          tokenStorage.set(response.data);
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(readEpic, createEpic);
