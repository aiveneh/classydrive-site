import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import { ofType, catchError, switchMap, of } from 'storejars-react-toolkit/dist/operators';
import { Actions, entitiesMeta, entities, responder, metas } from 'storejars-react-toolkit';

import { api } from '../helpers';
import namespaces from '../namespaces';

export const action = new Actions(namespaces.CARS);

export const selector = createSelector(entities, (state) => state.cars);
export const metaSelector = createSelector(entitiesMeta, (state) => state.cars);

export const reducer = handleActions(
  {
    [action.read.success]: (state, action$) =>
      produce(state, (draft) => {
        draft.data = action$.payload;
        return draft;
      }),
    [action.readOne.success]: (state, action$) =>
      produce(state, (draft) => {
        draft.item = action$.payload;
        return draft;
      }),
  },
  { data: [], item: { images: [] }, similarCars: [] },
);

export const metaReducer = metas(action);

function readEpic(action$) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(() => {
      return api.get$('/cars?approved=true').pipe(
        switchMap(({ response }) => {
          return of(action.readAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readAction(responder(response)).error)),
      );
    }),
  );
}

function readOneEpic(action$) {
  return action$.pipe(
    ofType(action.readOne.loading),
    switchMap(({ payload }) => {
      return api.get$(`/cars/${payload.id}`).pipe(
        switchMap(({ response }) => {
          return of(action.readOneAction(response.data).success);
        }),
        catchError(({ response }) => of(action.readOneAction(responder(response)).error)),
      );
    }),
  );
}

export const epic = combineEpics(readEpic, readOneEpic);
