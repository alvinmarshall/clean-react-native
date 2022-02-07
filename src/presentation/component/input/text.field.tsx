import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TextView} from '~presentation/component/label/text.view';

export interface TextFieldProps {
  containerStyle?: StyleProp<ViewStyle>;
  errorTextStyle?: StyleProp<ViewStyle>;

  prefix?: React.ReactNode;
  prefixIcon?: ImageSourcePropType;

  suffix?: React.ReactNode;
  suffixIcon?: ImageSourcePropType;

  errorLabel?: string;

  inputProps?: TextInputProps;
  resId?: string;
}

export const TextField: React.FC<TextFieldProps> = props => {
  const {
    containerStyle,
    errorTextStyle,
    prefix,
    prefixIcon,
    suffix,
    suffixIcon,
    errorLabel,
    inputProps = {},
    resId,
  } = props;

  const renderPrefix = () => {
    if (prefix) {
      return prefix;
    }
    if (prefixIcon) {
      return <Image source={prefixIcon} />;
    }
    return null;
  };

  const renderSuffix = () => {
    if (suffix) {
      return suffix;
    }
    if (suffixIcon) {
      return <Image source={suffixIcon} />;
    }
    return null;
  };

  return (
    <View style={[_styles.container, containerStyle]}>
      <View style={_styles.content}>
        {renderPrefix()}
        <View style={_styles.padding} />
        <TextInput
          testID={resId}
          {...inputProps}
          style={[_styles.input, inputProps.style]}
        />
        {renderSuffix()}
      </View>
      <TextView text={errorLabel} style={[_styles.error, errorTextStyle]} />
      <View style={_styles.divider} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#F1F3F8',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  error: {
    fontSize: 10,
    marginTop: 4,
    marginBottom: 4,
    color: '#F1F3F8',
  },
  padding: {width: 16},
});
