import {
  RootEpicDependency,
  RootStoreState,
} from '~presentation/share-state/redux/reducers/types';
import {combineEpics, createEpicMiddleware, Epic} from 'redux-observable';
import {BehaviorSubject, catchError} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';
import {Action} from 'redux';

export const createEpicManager = (
  dependencies: RootEpicDependency = {},
  ...epics: Epic[]
) => {
  const addedEpics: Epic[] = [];
  const epic$ = new BehaviorSubject(combineEpics(...epics));
  const addEpic = (epic: Epic) => {
    if (addedEpics.includes(epic)) {
      return;
    }
    addedEpics.push(epic);
    epic$.next(epic);
  };

  const rootEpic: Epic = (action$, state$) =>
    epic$.pipe(
      mergeMap(epic =>
        epic(action$, state$, dependencies).pipe(
          tap(x => console.log(x?.type)),
          catchError((err, caught) => {
            console.warn(err);
            return caught;
          }),
        ),
      ),
    );

  const epicMiddleware = createEpicMiddleware<
    Action,
    Action,
    RootStoreState,
    RootEpicDependency
  >();
  return {epic$, rootEpic, epicMiddleware, addEpic};
};
