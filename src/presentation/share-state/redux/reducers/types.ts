import {Reducer, Action, Store} from 'redux';
import {Epic} from 'redux-observable';

import {BehaviorSubject} from 'rxjs';
import {RegistrationState} from '~presentation/share-state/redux/reducers/register';

export type RootStoreState = {
  registration: RegistrationState;
};

export type RootEpicDependency = {};

export type RootEpic = Epic<Action, Action, RootStoreState, RootEpicDependency>;

export type ReducerManger = {
  reduce: Reducer<RootStoreState, Action>;
  add(key: string, reducer: Reducer): void;
  remove(key: string): void;
};

export type StoreContainer = {
  store: Store;
  reducerManager: ReducerManger;
  epic$: BehaviorSubject<Epic>;
  action$: BehaviorSubject<Action>;
  addEpic: (epic: Epic) => void;
};
