import { StatusCode } from "@common/statusCodeEnum";
import { CustomError } from "./CustomError";


export class DatabaseError extends CustomError<DatabaseError> {
  constructor(message: string, ) {
    super(message, StatusCode.DB_CRASH);
  }
}