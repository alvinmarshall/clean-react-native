import {RemoteException} from '~core/exception/remote.exception';
import {AxiosError} from 'axios';

export class RxAxiosProviderException extends RemoteException<AxiosError> {}
