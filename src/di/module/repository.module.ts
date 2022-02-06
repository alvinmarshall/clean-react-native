import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {RegistrationRepositoryImpl} from '~data/repository/registration.repository.impl';

export const registerRepositoryModule = () => {
  // Registration
  container.register(AppDependencies.RegistrationRepository, {
    useClass: RegistrationRepositoryImpl,
  });
};
