import { StatusCode } from "@common/statusCodeEnum";
import { CustomError } from "./CustomError";


export class CorsError extends CustomError<CorsError> {
  constructor(message: string, title: string = 'CORS Error') {
    super(message, StatusCode.REJECTED_URL, title);
  }
}