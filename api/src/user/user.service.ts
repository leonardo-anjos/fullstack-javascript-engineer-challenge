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

  async create(contact: User): Promise<User> {
    return await this.userRepository.save(contact);
  }

  async update(contact: User): Promise<UpdateResult> {
    return await this.userRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
