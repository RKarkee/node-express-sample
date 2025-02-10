export interface LoginRequestDto {
  //login email
  email: string;
  //login password
  password: string;
}

export interface LoginResponseDto {
  email: string;
  fullName: string;
  accessToken: string;
  refreshToken: string;
}
