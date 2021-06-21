import { Module } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserTypeController } from './user-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './user-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserType]),
  ],
  controllers: [UserTypeController],
  providers: [UserTypeService]
})
export class UserTypeModule { }
