import {createAction} from '@reduxjs/toolkit';
import {Registration} from '~domain/entity/registration.entity';

// Sign Up
export const signUp = createAction<Registration>('registration/signUp');
export const signUpBegin = createAction('registration/signUpBegin');
export const signUpSuccess = createAction('registration/signUpSuccess');
export const signUpFailed = createAction('registration/signUpFailed');
