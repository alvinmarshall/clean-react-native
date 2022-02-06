import {ApiResult, RegistrationInputDto} from '~dto';
import {Observable} from 'rxjs';
import {inject, injectable} from 'tsyringe';
import {RxRemoteProvider} from '~core/api/rx.remote.provider';
import {AppDependencies} from '~di/types';
import {map} from 'rxjs/operators';

export interface RegistrationRemoteSource {
  signUp(data: RegistrationInputDto): Observable<any>;
}

@injectable()
export class RegistrationRemoteSourceImpl implements RegistrationRemoteSource {
  constructor(
    @inject(AppDependencies.AxiosProvider)
    private readonly remoteProvider: RxRemoteProvider,
  ) {}
  signUp(data: RegistrationInputDto): Observable<any> {
    return this.remoteProvider
      .post<ApiResult>('/register', data)
      .pipe(map(response => response.data));
  }
}
