import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: any, password: any) {
    const user: any = await this.userService.getSingleUserByEmail(email);

    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
