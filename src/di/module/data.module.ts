import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {RegistrationUseCase} from '~domain/use-case/registration.use-case';

export const registerDataModule = () => {
  container.register(AppDependencies.RegistrationUseCase, {
    useClass: RegistrationUseCase,
  });
};
