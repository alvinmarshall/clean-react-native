import {container} from 'tsyringe';
import {AppDependencies} from '~di/types';
import {BearerAuthorizationRxAxiosProvider} from '~core/api/rx.remote.provider';
import {AppConfig} from '~config/app.config';
import {RegistrationRemoteSourceImpl} from '~data/source/remote/registration.remote.source';

export const registerDataModule = () => {
  // Axios
  container.register(AppDependencies.AxiosProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: AppConfig.BaseUrl,
    }),
  });

  // Remote Source
  container.register(AppDependencies.RegistrationRemoteSource, {
    useClass: RegistrationRemoteSourceImpl,
  });
};
