import 'reflect-metadata';
import {RegistrationRepositoryImpl} from '~data/repository/registration.repository.impl';
import {RegistrationInputDto} from '~dto';
import {of} from 'rxjs';

describe('Registration Repository', () => {
  let remoteSource: any;
  let repository: RegistrationRepositoryImpl;

  beforeEach(() => {
    remoteSource = {
      signUp: jest.fn(),
    };
    repository = new RegistrationRepositoryImpl(remoteSource);
  });

  it('should return registration success response', () => {
    const inputDto = new RegistrationInputDto();
    remoteSource.signUp.mockReturnValue(
      of({data: {success: true, user_id: 'test-user-id'}}),
    );
    repository.signUp(inputDto).subscribe(resp => {
      expect(resp).not.toBeNull();
      expect(resp.data).not.toBeNull();
      expect(resp.data.success).toBe(true);
    });
  });
});
