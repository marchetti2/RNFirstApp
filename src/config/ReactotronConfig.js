import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}

// .setAsyncStorageHandler(AsyncStorage)
