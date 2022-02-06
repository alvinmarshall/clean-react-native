import {BearerAuthorizationRxAxiosProvider} from '~core/api/rx.remote.provider';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {RxAxiosProviderException} from '~core/exception';
import {Observable} from 'rxjs';

describe('Rx Remote Provider', () => {
  let provider: BearerAuthorizationRxAxiosProvider<any>;
  let requestConfigs: AxiosRequestConfig[] = [];
  let responsePromise: {[key in string]: Promise<any>} = {};

  beforeEach(() => {
    responsePromise = {};
    requestConfigs = [];
    provider = new BearerAuthorizationRxAxiosProvider<any>({
      adapter: config => {
        requestConfigs.push(config);
        return responsePromise[config?.url ?? ''];
      },
    });
  });

  it('request successful', done => {
    const config: AxiosRequestConfig = {
      url: 'http://localhostest',
      method: 'post',
    };
    const response = new Promise(res => res({data: {test: 'test'}}));
    responsePromise = {[config.url ?? '']: response};
    provider.request(config).subscribe({
      next: (value: any) => {
        expect(value.data.test).toBe('test');
        expect(requestConfigs.length).toBeGreaterThan(0);
      },
      complete: done,
    });
  });

  it('request failed', done => {
    const config: AxiosRequestConfig = {
      url: 'http://localhostest',
      method: 'post',
    };
    const response = new Promise((_, reject) => reject({data: {}}));
    responsePromise = {[config.url ?? '']: response};

    provider.post(config.url!, config.data).subscribe({
      error: error => {
        expect(error).toBeInstanceOf(RxAxiosProviderException);
        done();
      },
    });
  });

  it('post', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.post('test', {});
    expect(mockProvider.logs).toEqual(['request']);
  });

  it('get', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.get('test');
    expect(mockProvider.logs).toEqual(['request']);
  });
});

export class MockBearerAuthorizationRxAxiosProvider extends BearerAuthorizationRxAxiosProvider {
  mockResult: Observable<AxiosResponse<any>> = new Observable();
  overrideFunctions: ('request' | '')[] = [];
  logs: string[] = [];
  request(requestConfig: AxiosRequestConfig): Observable<AxiosResponse<any>> {
    this.logs.push('request');
    if (this.overrideFunctions.includes('request')) {
      return this.mockResult;
    }
    return super.request(requestConfig);
  }
}
