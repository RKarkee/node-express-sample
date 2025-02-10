// Objective: Validation schema for user signup
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';
const complexityOptions = {
  min: 5,
  max: 250,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2
};

export const userSignupSchema = Joi.object({
  firstName: Joi.string().required().messages({ 'string.empty': 'First name is required' }),
  lastName: Joi.string().required().messages({ 'string.empty': 'Last name is required' }),
  email: Joi.string().email().required().messages({ 'string.empty': 'Email is required', 'string.email': 'Email is invalid' }),

  password: passwordComplexity(complexityOptions).required().messages({ 'string.empty': 'Password is required' })
});
