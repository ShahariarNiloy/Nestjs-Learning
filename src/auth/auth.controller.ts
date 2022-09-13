import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/login')
  async authLogin(@Body() loginBody: any) {
    const user: any = await this.userService.getSingleUserByEmail(
      loginBody.email,
    );

    if (user) {
      if (user.password === loginBody.password) {
        return user;
      }
      return 'Password does not matched';
    }
    return `Unauthenticated`;
  }
}
