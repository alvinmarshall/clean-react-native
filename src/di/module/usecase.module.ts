import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {RegistrationUseCase} from '~domain/use-case';

export const registerUseCaseModule = () => {
  // Registration
  container.register(AppDependencies.RegistrationUseCase, {
    useClass: RegistrationUseCase,
  });
};
