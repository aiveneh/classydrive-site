import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.SPAREPARTS);

export const selector = createSelector(entities, (state) => state.spareparts);
export const metaSelector = createSelector(entitiesMeta, (state) => state.spareparts);

export const reducer = handleActions(
  {
    [action.read.success]: (state, action$) =>
      produce(state, (draft) => {
        draft.data = action$.payload;
        return draft;
      }),
  },
  { data: [], item: {}, similarSpareparts: [] },
);

export const metaReducer = metas(action);

function readEpic(action$) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(() => {
      return api.get$('/spareparts').pipe(
        switchMap(({ response }) => {
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

function createEpic(action$) {
  return action$.pipe(
    ofType(action.create.loading),
    switchMap(({ payload }) => {
      return api.multipartPost$('/spareparts', payload).pipe(
        switchMap(({ response }) => {
          return of(action.createAction(response.data).success);
        }),
        catchError(({ response }) => of(action.createAction(responder(response)).error)),
      );
    }),
  );
}

function updateEpic(action$) {
  return action$.pipe(
    ofType(action.update.loading),
    switchMap(({ payload }) => {
      return api.patch$(`/spareparts/${payload._id}`, payload).pipe(
        switchMap(({ response }) => {
          return of(action.updateAction(response.data).success);
        }),
        catchError(({ response }) => of(action.updateAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(readEpic, createEpic, updateEpic);
