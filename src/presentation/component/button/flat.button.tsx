import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Ripple from 'react-native-material-ripple';

export interface FlatButtonProps extends TextProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
  resId?: string;
}

const _FlatButton: React.FC<FlatButtonProps> = props => {
  const {title, onPress, titleStyle, resId} = props;
  return (
    <Ripple
      onPress={onPress}
      testID={resId}
      style={StyleSheet.flatten([_styles.container, props.containerStyle])}>
      <Text style={[_styles.title, titleStyle]}>{title}</Text>
    </Ripple>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
  },
});

export const FlatButton = React.memo(_FlatButton);
