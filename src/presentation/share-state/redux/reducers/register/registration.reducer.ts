import {createReducer} from '@reduxjs/toolkit';
import {
  signUpBegin,
  signUpFailed,
  signUpSuccess,
} from '~presentation/share-state/redux/actions/register';

export type RegistrationState = {
  isRegistering: boolean;
  isRegistered: boolean;
};

const INITIAL_STATE: RegistrationState = {
  isRegistering: false,
  isRegistered: false,
};

export const registrationReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(signUpBegin, state =>
    Object.assign(state, {isRegistering: true}),
  );
  builder.addCase(signUpSuccess, state =>
    Object.assign(state, {isRegistered: true, isRegistering: false}),
  );
  builder.addCase(signUpFailed, state =>
    Object.assign(state, {isRegistering: false, isRegistered: false}),
  );
});
