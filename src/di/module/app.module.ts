import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {
  configureStore,
  StoreContainer,
} from '~presentation/share-state/redux/reducers';

const registerDependencies = () => {};

const registerFlyValue = () => {
  container.register<StoreContainer>(AppDependencies.StoreContainer, {
    useValue: configureStore(),
  });
};

export {registerDependencies, registerFlyValue, container};
