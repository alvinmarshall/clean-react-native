import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {RegistrationUseCase} from '~domain/use-case/registration.use-case';
import {BearerAuthorizationRxAxiosProvider} from '~core/api/rx.remote.provider';
import {AppConfig} from '~config/app.config';

export const registerDataModule = () => {
  container.register(AppDependencies.RegistrationUseCase, {
    useClass: RegistrationUseCase,
  });
  container.register(AppDependencies.AxiosProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: AppConfig.BaseUrl,
    }),
  });
};
