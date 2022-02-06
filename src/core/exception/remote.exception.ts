import {Exception} from '~core/exception/exception';

export class RemoteException<T = any> extends Exception {
  constructor(private readonly raw: T) {
    super();
  }
  getCause(): T {
    return this.raw;
  }
}
