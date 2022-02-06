import {Observable} from 'rxjs';

/**
 * @param T Output object
 * @param I Input object
 * @return observable of output object
 */
export interface UseCase<T = any, I = any> {
  /**
   * @summary call to execute use case
   * @param input
   */
  execute(input?: I): Observable<T>;
}
