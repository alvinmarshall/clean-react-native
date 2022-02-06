export type RegistrationProps = {
  navigation: any;
  route: any;
};
export type RegistrationHandle = {
  onSignUpFailed: () => void;
};

export type RegistrationReduxSelectionState = {
  isRegistering: boolean;
};

export type RegistrationState = {
  isRegistering: boolean;
  signUp: () => void;
};
