import Config from 'react-native-config';

export const AppConfig = {
  AuthClientUrl:
    Config.AUTH_CLIENT_URL || 'https://jsonplaceholder.typicode.com',
  BaseUrl: Config.BASE_URL || 'https://jsonplaceholder.typicode.com',
};
