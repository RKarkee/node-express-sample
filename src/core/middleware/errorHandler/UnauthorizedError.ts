import { StatusCode } from '@common/statusCodeEnum';
import { CustomError } from './CustomError';
export class UnauthorizedError extends CustomError<UnauthorizedError> {
  constructor(message: string) {
    super(message, StatusCode.UNAUTHORIZED, 'Unauthorized');
  }
}
