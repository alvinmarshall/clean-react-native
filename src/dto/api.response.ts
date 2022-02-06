import {AxiosResponse} from 'axios';

export interface ApiResult<T = any> {
  data: T;
  message?: string;
}

export type ApiProviderResult<T> = AxiosResponse<ApiResult<T>>;
