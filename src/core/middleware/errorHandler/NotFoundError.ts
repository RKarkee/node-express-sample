import { StatusCode } from '@common/statusCodeEnum';
import { CustomError } from './CustomError';
export class NotFoundError extends CustomError<NotFoundError> {
  constructor(message: string) {
    super(message, StatusCode.NOT_FOUND, 'Not Found');
  }
}
