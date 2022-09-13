import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './dto/userCreate.dto';
import { UpdateUserDTO } from './dto/userUpdate.dto';

@Injectable()
export class UserService {
  getUsers() {
    return 'I am a user';
  }

  getSingleUser(userId: Number) {
    return userId;
  }

  createUser(createUserBody: CreateUserDTO) {
    return createUserBody;
  }

  deleteSingleUser(userId: Number) {
    return userId;
  }

  updateSingleUser(updateUserBody: UpdateUserDTO, userId: Number) {
    return [updateUserBody, userId];
  }
}
