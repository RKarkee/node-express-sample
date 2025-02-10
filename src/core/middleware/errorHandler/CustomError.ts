export class CustomError<T> extends Error {
  status: number;
  code: string;
  errorMessage?: string;
  data: {
    message: string;
  };
  constructor(message: string = 'Error',status: number = 400, errorMessage: string = '',  code: string =' -1') {
    super(message);
    this.code = code;
    this.status = status;
    this.errorMessage = errorMessage;
    this.message = message;
    this.data = {
      message
    };
  }
}

//export default CustomError;

export interface IResponseError {
  status?: number;
  code: string;
  errorMessage?: string;
  message: string;
  data: {
    message: string;
  };
}
