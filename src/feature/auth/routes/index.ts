import { asyncHandler } from '@core/middleware/responseHandler/asyncHandler';
import { validate } from '@core/validation';
import signupUsecase from '@feature/auth/usecase/signup.usecase';
import { Router } from 'express';
import { userSignupSchema } from '../validationSchema/userSignupSchema';

const router = Router();
router.post('/signup', validate(userSignupSchema), asyncHandler(signupUsecase));

export default router;
