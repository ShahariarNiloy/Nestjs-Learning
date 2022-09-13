import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:userId')
  getSingleUser(@Param() userId: Number) {
    return this.userService.getSingleUser(userId);
  }

  @Post()
  createUser(@Req() req: Request) {
    return this.userService.createUser(req);
  }

  @Delete('/:userId')
  deleteSingleUser(@Param() userId: Number) {
    return this.userService.deleteSingleUser(userId);
  }

  @Patch('/:userId')
  updateSingleUser(@Req() req: Request, @Param() userId: Number) {
    return this.userService.updateSingleUser(req, userId);
  }
}
