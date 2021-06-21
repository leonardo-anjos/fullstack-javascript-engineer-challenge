import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './user-type.entity';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) { }

  async findAll(): Promise<UserType[]> {
    return await this.userTypeRepository.find();
  }

  async create(userType: UserType): Promise<UserType> {
    return await this.userTypeRepository.save(userType);
  }

  async update(userType: UserType): Promise<UpdateResult> {
    return await this.userTypeRepository.update(userType.id, userType);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userTypeRepository.delete(id);
  }
}
