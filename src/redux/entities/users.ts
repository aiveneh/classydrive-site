import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api, tokenStorage } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.USERS);

export const selector = createSelector(entities, (state) => state.users);
export const metaSelector = createSelector(entitiesMeta, (state) => state.users);

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
      return api.post$('/users', payload).pipe(
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
    switchMap(() => {
      return api.get$('/users').pipe(
        switchMap(({ response }) => {
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

function deleteEpic(action$) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(({ payload }) => {
      return api.post$('/users', payload).pipe(
        switchMap(({ response }) => {
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(readEpic, createEpic, deleteEpic);
