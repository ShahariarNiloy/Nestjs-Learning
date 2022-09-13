import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './dto/userCreate.dto';
import { UpdateUserDTO } from './dto/userUpdate.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:userId')
  getSingleUser(@Param('userId', ParseIntPipe) userId: Number) {
    return this.userService.getSingleUser(userId);
  }

  @Post()
  createUser(@Body() createUserBody: CreateUserDTO) {
    return this.userService.createUser(createUserBody);
  }

  @Delete('/:userId')
  deleteSingleUser(@Param('userId', ParseIntPipe) userId: Number) {
    return this.userService.deleteSingleUser(userId);
  }

  @Patch('/:userId')
  updateSingleUser(
    @Body() updateUserBody: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: Number,
  ) {
    return this.userService.updateSingleUser(updateUserBody, userId);
  }
}
