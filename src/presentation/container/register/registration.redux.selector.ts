import {Selector} from 'react-redux';
import {RootStoreState} from '~presentation/share-state/redux/reducers';
import {RegistrationReduxSelectionState} from '~presentation/container/register/types';

export const registrationReduxSelector: Selector<
  RootStoreState,
  RegistrationReduxSelectionState
> = state => {
  return {
    isRegistering: state.registration.isRegistering,
  };
};
