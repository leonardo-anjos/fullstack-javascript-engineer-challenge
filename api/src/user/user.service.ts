import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ relations: ['user_type'] });
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOne(id, { relations: ['user_type'] });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: User): Promise<UpdateResult> {
    return await this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
