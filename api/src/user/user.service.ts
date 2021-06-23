import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Logger } from 'winston';

@Injectable()
export class UserService {

  private readonly className = UserService.name;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject('winston') private readonly logger: Logger,
  ) { }

  async findAll(): Promise<User[]> {
    this.logger.info(`[${this.className}]: findAll %j`);
    return await this.userRepository.find({ relations: ['user_type'] });
  }

  async findById(id: string): Promise<User> {
    this.logger.info(`[${this.className}]: findById %j`, id);
    return await this.userRepository.findOne(id, { relations: ['user_type'] });
  }

  async create(user: User): Promise<User> {
    this.logger.info(`[${this.className}]: create %j`, user);
    return await this.userRepository.save(user);
  }

  async update(id: string, user: User): Promise<UpdateResult> {
    this.logger.info(`[${this.className}]: update %j`, user);
    return await this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<DeleteResult> {
    this.logger.info(`[${this.className}]: delete %j`);
    return await this.userRepository.delete(id);
  }
}
