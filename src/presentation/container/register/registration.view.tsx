import {RegistrationProps} from '~presentation/container/register/types';
import React from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {useSignUp} from '~presentation/container/register/registration.hooks';
import {ICON_EMAIL, ICON_LOCK} from '~assets';
import {Formik} from 'formik';
import {PrimaryBackground} from '~presentation/component/primaryBg';
import {TextField} from '~presentation/component/input';
import * as Yup from 'yup';
import {TextView} from '~presentation/component/label';
import {FullScreenLoadingIndicator} from '~presentation/component/indicator';
import {FlatButton} from '~presentation/component/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '~presentation/resource/values';

let signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('FirstName required!'),
  lastName: Yup.string().required('LastName required!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('This field is required!'),

  phoneNumber: Yup.string().required('This field is required!'),
  countryCode: Yup.string().required('This field is required!'),
  password: Yup.string().required('Password required!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password', undefined)],
    'Password must match',
  ),
});

const _SignUp: React.FC<RegistrationProps> = props => {
  const {} = props;
  const onSignUpFailed = React.useCallback(() => {
    Alert.alert('Error', 'Registration failed!');
  }, []);

  const {isRegistering, submit} = useSignUp({onSignUpFailed});
  return (
    <PrimaryBackground>
      <SafeAreaView style={{paddingHorizontal: 40, flex: 1}}>
        <Formik
          initialValues={{
            firstName: 'kelvin',
            lastName: 'kelvin',
            email: 'ke@me.com',
            phoneNumber: '32',
            countryCode: 'ds',
            password: 'qq',
            confirmPassword: 'qq',
          }}
          validationSchema={signUpSchema}
          onSubmit={values => {
            submit(values);
          }}>
          {({errors, setFieldValue, submitForm, values}) => (
            <KeyboardAwareScrollView
              style={{flex: 1}}
              contentContainerStyle={{justifyContent: 'center', flex: 1}}>
              <FullScreenLoadingIndicator visible={isRegistering} />
              <TextView text="SIGN UP" style={styles.titleText} />
              {/*First Name*/}
              <TextField
                resId={'input_firstName'}
                prefixIcon={ICON_EMAIL}
                errorLabel={errors.firstName}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  value: values.firstName,
                  onChangeText: (value: string) => {
                    setFieldValue('firstName', value, false);
                  },
                  placeholder: 'FirstName',
                  placeholderTextColor: '#dedede',
                }}
              />
              {/*Last Name*/}
              <TextField
                resId={'input_lastName'}
                prefixIcon={ICON_EMAIL}
                errorLabel={errors.lastName}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  value: values.lastName,
                  onChangeText: (value: string) => {
                    setFieldValue('lastName', value, false);
                  },
                  placeholder: 'LastName',
                  placeholderTextColor: '#dedede',
                }}
              />
              {/*Email*/}
              <TextField
                resId={'input_email'}
                prefixIcon={ICON_EMAIL}
                errorLabel={errors.email}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  value: values.email,
                  onChangeText: (value: string) => {
                    setFieldValue('email', value, false);
                  },
                  placeholder: 'Email',
                  placeholderTextColor: '#dedede',
                }}
              />
              {/*Country Code*/}
              <TextField
                resId={'input_phoneNumber'}
                prefixIcon={ICON_EMAIL}
                errorLabel={errors.phoneNumber}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  value: values.phoneNumber,
                  onChangeText: (value: string) => {
                    setFieldValue('phoneNumber', value, false);
                  },
                  placeholder: 'PhoneNumber',
                  placeholderTextColor: '#dedede',
                }}
              />
              {/*Country Code*/}
              <TextField
                resId={'input_countryCode'}
                prefixIcon={ICON_EMAIL}
                errorLabel={errors.countryCode}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  value: values.countryCode,
                  onChangeText: (value: string) => {
                    setFieldValue('countryCode', value, false);
                  },
                  placeholder: 'Country Code',
                  placeholderTextColor: '#dedede',
                }}
              />
              {/*Password*/}
              <TextField
                resId={'input_password'}
                prefixIcon={ICON_LOCK}
                errorLabel={errors.password}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  secureTextEntry: true,
                  value: values.password,
                  onChangeText: (value: string) => {
                    setFieldValue('password', value, false);
                  },
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  placeholder: 'Password',
                  placeholderTextColor: '#dedede',
                }}
              />

              {/*Confirm Password*/}
              <TextField
                resId={'input_confirmPassword'}
                prefixIcon={ICON_LOCK}
                errorLabel={errors.confirmPassword}
                containerStyle={{
                  marginBottom: 16,
                }}
                inputProps={{
                  secureTextEntry: true,
                  value: values.confirmPassword,
                  onChangeText: (value: string) => {
                    setFieldValue('confirmPassword', value, false);
                  },
                  style: {
                    color: Colors.WHITE,
                    fontSize: 16,
                  },
                  placeholder: 'Confirm Password',
                  placeholderTextColor: '#dedede',
                }}
              />
              <FlatButton
                resId={'btn_signUp'}
                title="SIGN UP"
                titleStyle={styles.btn}
                containerStyle={styles.btnContainer}
                onPress={submitForm}
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </PrimaryBackground>
  );
};

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 65,
  },
  btn: {
    fontSize: 16,
    fontWeight: '700',
  },
  btnContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: 40,
    marginBottom: 40,
  },
  indicator: {
    width: '25%',
    backgroundColor: Colors.WHITE,
    height: 1,
  },
});

export const SignUp = React.memo(_SignUp);
