import {Observable} from 'rxjs';

export interface RegistrationRepository {
  signUp(registrationInput: any): Observable<any>;
}
