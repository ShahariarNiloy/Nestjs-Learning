import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return 'I am a user';
  }

  getSingleUser(userId: Number) {
    return userId;
  }

  createUser(req: Request) {
    return req.body;
  }

  deleteSingleUser(userId: Number) {
    return userId;
  }

  updateSingleUser(req: Request, userId: Number) {
    return [req.body, userId];
  }
}
