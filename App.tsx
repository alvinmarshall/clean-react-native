/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'reflect-metadata';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {
  container,
  registerDependencies,
  registerFlyValue,
} from '~di/module/app.module';
import {Provider} from 'react-redux';
import {AppDependencies} from '~di/types';
import {StoreContainer} from '~presentation/share-state/redux/reducers';
import {SignUp} from '~presentation/container/register/registration.view';

registerDependencies();
registerFlyValue();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Provider
            store={
              container.resolve<StoreContainer>(AppDependencies.StoreContainer)
                .store
            }>
            <SignUp />
          </Provider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
