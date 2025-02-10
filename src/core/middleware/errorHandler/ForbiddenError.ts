import { StatusCode } from '@common/statusCodeEnum';
import { CustomError } from './CustomError';
export class ForbiddenError extends CustomError<ForbiddenError> {
  constructor(message: string) {
    super(message, StatusCode.FORBIDDEN, 'Access Denied');
  }
}
