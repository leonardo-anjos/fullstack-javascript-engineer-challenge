import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './user-type.entity';
import { Logger } from 'winston';

@Injectable()
export class UserTypeService {

  private readonly className = UserTypeService.name;

  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @Inject('winston') private readonly logger: Logger,
  ) { }

  async findAll(): Promise<UserType[]> {
    this.logger.info(`[${this.className}]: findAll %j`);
    return await this.userTypeRepository.find();
  }

  async create(userType: UserType): Promise<UserType> {
    this.logger.info(`[${this.className}]: create %j`, userType);
    return await this.userTypeRepository.save(userType);
  }

  // async update(id: string, userType: UserType): Promise<UpdateResult> {
  //   this.logger.info(`[${this.className}]: update %j`, userType);
  //   return await this.userTypeRepository.update(id, userType);
  // }

  // async delete(id: string): Promise<DeleteResult> {
  //   this.logger.info(`[${this.className}]: delete %j`, id);
  //   return await this.userTypeRepository.delete(id);
  // }
}
