import { NextFunction, Request, Response } from 'express';
import { SignupResponse } from './response/signup.usecase.response';
import { Result } from '@core/middleware/responseHandler/Results';

async function signupUsecase(req: Request, res: Response, next: NextFunction) {
  //logic to signup

  const response = new SignupResponse('User signed up successfully');

  return Result.createSuccess(response);
}
export default signupUsecase;
