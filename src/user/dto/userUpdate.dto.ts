import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
