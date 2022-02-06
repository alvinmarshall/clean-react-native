import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {
  configureStore,
  StoreContainer,
} from '~presentation/share-state/redux/reducers';
import {registerDataModule} from '~di/module/data.module';

const registerDependencies = () => {
  registerDataModule();
};

const registerFlyValue = () => {
  container.register<StoreContainer>(AppDependencies.StoreContainer, {
    useValue: configureStore(),
  });
};

export {registerDependencies, registerFlyValue, container};
