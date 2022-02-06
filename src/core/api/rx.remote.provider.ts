import {from, mergeMap, Observable, throwError} from 'rxjs';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {catchError} from 'rxjs/operators';
import {RxAxiosProviderException} from '~core/exception';

export interface RxRemoteProvider {
  post<T>(url: string, data?: any, headers?: any): Observable<AxiosResponse<T>>;

  get<T>(url: string, headers?: any): Observable<AxiosResponse<T>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class BearerAuthorizationRxAxiosProvider<Result = any>
  implements RxRemoteProvider
{
  private readonly axiosInstance: AxiosInstance;
  private token?: string;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  get<T>(url: string, headers?: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'GET',
      url,
      headers,
    });
  }

  post<T>(
    url: string,
    data?: any,
    headers?: any,
  ): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'POST',
      data,
      url,
      headers,
    });
  }

  request<T>(requestConfig: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return from(this.axiosInstance.request(requestConfig)).pipe(
      mergeMap(async value => value),
      catchError(err => {
        console.error(err);
        return throwError(() => new RxAxiosProviderException(err));
      }),
    );
  }
}
