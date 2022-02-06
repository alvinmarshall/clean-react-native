import {
  signUpBegin,
  signUpFailed,
  signUpSuccess,
} from '~presentation/share-state/redux/actions/register';
import {
  registrationReducer,
  RegistrationState,
} from '~presentation/share-state/redux/reducers/register/registration.reducer';

describe('Registration Reducer', () => {
  it('should return the initial state', () => {
    const registrationState = registrationReducer(undefined, {type: undefined});
    expect(registrationState).toEqual({
      isRegistering: false,
      isRegistered: false,
    });
  });

  it('should return isRegistering to be true when signUpBegin action is invoked', () => {
    const prevState: RegistrationState = {
      isRegistering: false,
      isRegistered: false,
    };
    const registrationState = registrationReducer(prevState, signUpBegin);
    expect(registrationState).toEqual({
      isRegistering: true,
      isRegistered: false,
    });
  });

  it('should return isRegistered to be true when signUpSuccess action is invoked', () => {
    const prevState: RegistrationState = {
      isRegistering: true,
      isRegistered: false,
    };
    const registrationState = registrationReducer(prevState, signUpSuccess);
    expect(registrationState).toEqual({
      isRegistering: false,
      isRegistered: true,
    });
  });

  it('should return isRegistered to be false when signUpFailed action is invoked', () => {
    const prevState: RegistrationState = {
      isRegistering: true,
      isRegistered: false,
    };
    const registrationState = registrationReducer(prevState, signUpFailed);
    expect(registrationState).toEqual({
      isRegistering: false,
      isRegistered: false,
    });
  });
});
