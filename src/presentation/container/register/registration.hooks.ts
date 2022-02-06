import {RegistrationHandle} from '~presentation/container/register/types';
import {useDispatch, useSelector} from 'react-redux';
import {registrationReduxSelector} from '~presentation/container/register/registration.redux.selector';
import {
  signUp,
  signUpFailed,
} from '~presentation/share-state/redux/actions/register';
import {Registration} from '~domain/entity/registration.entity';
import {container} from 'tsyringe';
import {StoreContainer} from '~presentation/share-state/redux/reducers';
import {AppDependencies} from '~di/types';
import {useEffect} from 'react';
import {filter} from 'rxjs';

export const useSignUp = (handle: RegistrationHandle) => {
  const {onSignUpFailed} = handle;
  const {isRegistering} = useSelector(registrationReduxSelector);
  const dispatch = useDispatch();
  const submit = (props: Registration) => {
    dispatch(signUp({...props}));
  };
  const {action$} = container.resolve<StoreContainer>(
    AppDependencies.StoreContainer,
  );
  useEffect(() => {
    const subscribe = action$.pipe(filter(signUpFailed.match)).subscribe(() => {
      console.log('[registration] failed');
      onSignUpFailed();
    });
    return () => {
      if (subscribe.closed) {
        return;
      }
      subscribe.unsubscribe();
    };
  }, [action$, onSignUpFailed]);
  return {isRegistering, submit};
};
