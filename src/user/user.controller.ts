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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateUserDTO } from './dto/userCreate.dto';
import { UpdateUserDTO } from './dto/userUpdate.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:userId')
  getSingleUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getSingleUser(userId);
  }

  @Post()
  createUser(@Body() createUserBody: CreateUserDTO) {
    return this.userService.createUser(createUserBody);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:userId')
  deleteSingleUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteSingleUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:userId')
  updateSingleUser(
    @Body() updateUserBody: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.updateSingleUser(updateUserBody, userId);
  }
}
