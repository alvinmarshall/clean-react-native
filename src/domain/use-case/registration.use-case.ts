import {UseCase} from '~core/use-case';
import {RegistrationInputDto} from '~dto';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {RegistrationRepository} from '~domain/repository/registration.repository';
import {inject, injectable} from 'tsyringe';
import {AppDependencies} from '~di/types';

@injectable()
export class RegistrationUseCase implements UseCase<any, RegistrationInputDto> {
  constructor(
    @inject(AppDependencies.RegistrationRepository)
    private readonly registrationRepository: RegistrationRepository,
  ) {}

  execute(input?: RegistrationInputDto): Observable<any> {
    if (!input) {
      throw new Error('registration input required');
    }
    if (!input.firstName) {
      throw new Error('firstName required');
    }
    if (!input.lastName) {
      throw new Error('lastName required');
    }
    if (!input.email) {
      throw new Error('email required');
    }
    return this.remoteSignUp(input);
  }

  private remoteSignUp(input?: RegistrationInputDto): Observable<any> {
    console.log(['remote-sign-up']);
    return this.registrationRepository.signUp(input).pipe(
      map(result => {
        console.log('result', result);
        return result;
      }),
      catchError(err => {
        console.error('[remote-sign-up-err]', err);
        return throwError(err);
      }),
    );
  }
}
