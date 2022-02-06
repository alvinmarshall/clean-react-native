import {
  RootStoreState,
  StoreContainer,
} from '~presentation/share-state/redux/reducers/types';
import {createReducerManager} from '~presentation/share-state/redux/reducers/reducer';
import {registrationReducer} from '~presentation/share-state/redux/reducers/register';
import {BehaviorSubject} from 'rxjs';
import {Action, applyMiddleware, createStore} from 'redux';
import {createEpicManager} from '~presentation/share-state/redux/reducers/epic';

const {rootEpic, epicMiddleware, epic$, addEpic} = createEpicManager({});

export const configureStore = (): StoreContainer => {
  const reducerManager = createReducerManager({
    registration: registrationReducer,
  });

  const action$ = new BehaviorSubject<Action>({type: 'init'});
  const reducer = (
    state: RootStoreState | undefined,
    action: Action<string>,
  ) => {
    action$.next(action);
    return reducerManager.reduce(state, action);
  };

  const store = createStore<RootStoreState, Action<string>, any, any>(
    reducer,
    applyMiddleware(epicMiddleware),
  );
  epicMiddleware.run(rootEpic);

  return {
    reducerManager,
    store,
    epic$,
    action$,
    addEpic,
  };
};
