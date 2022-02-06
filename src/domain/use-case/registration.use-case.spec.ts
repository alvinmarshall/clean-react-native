import 'reflect-metadata';
import {RegistrationInputDto} from '~dto';
import {of} from 'rxjs';
import {RegistrationUseCase} from '~domain/use-case/registration.use-case';

describe('Registration Use-Case', () => {
  let registrationRepositoryMock: any;
  let useCase: RegistrationUseCase;
  beforeEach(() => {
    registrationRepositoryMock = {
      signUp: jest.fn(),
    };
    useCase = new RegistrationUseCase(registrationRepositoryMock);
  });

  it('should throw an error if registration input is null', () => {
    expect(() => useCase.execute().subscribe()).toThrow(
      new Error('registration input required'),
    );
  });

  it('should throw an error if firstName is null', () => {
    const inputDto = new RegistrationInputDto();
    expect(() => useCase.execute(inputDto).subscribe()).toThrow(
      new Error('firstName required'),
    );
  });

  it('should throw an error if lastName is null', () => {
    const inputDto = new RegistrationInputDto();
    inputDto.firstName = 'test first-name';
    expect(() => useCase.execute(inputDto).subscribe()).toThrow(
      new Error('lastName required'),
    );
  });

  it('should throw an error if email is null', () => {
    const inputDto = new RegistrationInputDto();
    inputDto.firstName = 'test first-name';
    inputDto.lastName = 'test last-name';
    expect(() => useCase.execute(inputDto).subscribe()).toThrow(
      new Error('email required'),
    );
  });

  it('should register user successful', () => {
    const inputDto = new RegistrationInputDto();
    inputDto.firstName = 'test first-name';
    inputDto.lastName = 'test last-name';
    inputDto.email = 'test email';
    registrationRepositoryMock.signUp.mockReturnValue(of({success: true}));
    useCase.execute(inputDto).subscribe();
  });
});
