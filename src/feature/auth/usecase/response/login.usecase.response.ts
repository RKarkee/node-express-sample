import { LoginRequestDto } from '@feature/auth/dto/loginDto';

export class LoginResponse {
  constructor(public readonly data: LoginRequestDto) {}
}
