import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/userCreate.dto';
import { UpdateUserDTO } from './dto/userUpdate.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getSingleUser(userId: number) {
    return this.userRepository.findOneBy({ id: userId });
  }

  createUser(createUserBody: CreateUserDTO) {
    return this.userRepository.save(createUserBody);
  }

  deleteSingleUser(userId: number) {
    return this.userRepository.delete(userId);
  }

  updateSingleUser(updateUserBody: UpdateUserDTO, userId: number) {
    return this.userRepository.update(userId, updateUserBody);
  }
}
