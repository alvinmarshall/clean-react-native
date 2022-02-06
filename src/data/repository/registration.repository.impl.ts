import {RegistrationRepository} from '~domain/repository';
import {Observable} from 'rxjs';
import {RegistrationRemoteSource} from '~data/source/remote/registration.remote.source';
import {inject, injectable} from 'tsyringe';
import {AppDependencies} from '~di/types';

@injectable()
export class RegistrationRepositoryImpl implements RegistrationRepository {
  constructor(
    @inject(AppDependencies.RegistrationRemoteSource)
    private readonly remoteSource: RegistrationRemoteSource,
  ) {}

  signUp(registrationInput: any): Observable<any> {
    return this.remoteSource.signUp(registrationInput);
  }
}
