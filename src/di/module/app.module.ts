import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {
  configureStore,
  StoreContainer,
} from '~presentation/share-state/redux/reducers';
import {registerDataModule} from '~di/module/data.module';
import {registerRepositoryModule} from '~di/module/repository.module';
import {registerUseCaseModule} from '~di/module/usecase.module';

const registerDependencies = () => {
  registerDataModule();
  registerUseCaseModule();
  registerRepositoryModule();
};

const registerFlyValue = () => {
  container.register<StoreContainer>(AppDependencies.StoreContainer, {
    useValue: configureStore(),
  });
};

export {registerDependencies, registerFlyValue, container};
