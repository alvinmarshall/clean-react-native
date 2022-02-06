import {combineEpics, Epic} from 'redux-observable';
import {catchError, concat, filter, of, switchMap} from 'rxjs';
import {
  signUp,
  signUpBegin,
  signUpFailed,
  signUpSuccess,
} from '~presentation/share-state/redux/actions/register';
import {container} from 'tsyringe';
import {RegistrationUseCase} from '~domain/use-case';
import {AppDependencies} from '~di/types';
import {map} from 'rxjs/operators';

const signUpEpic$: Epic = action$ => {
  return action$.pipe(
    filter(signUp.match),
    switchMap(action => {
      const useCase = container.resolve<RegistrationUseCase>(
        AppDependencies.RegistrationUseCase,
      );
      return concat(
        of(signUpBegin()),
        useCase.execute(action.payload).pipe(
          map(signUpSuccess),
          catchError(() => of(signUpFailed())),
        ),
      );
    }),
  );
};
export const registrationEpic = combineEpics(signUpEpic$);
