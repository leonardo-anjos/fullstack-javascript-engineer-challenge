import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserType } from './user-type.entity';

@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) { }

  @Get()
  index(): Promise<UserType[]> {
    return this.userTypeService.findAll();
  }

  @Post('create')
  async create(@Body() userTypeData: UserType): Promise<any> {
    return this.userTypeService.create(userTypeData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userTypeData: UserType): Promise<any> {
    userTypeData.id = Number(id);
    console.log('Update #' + userTypeData.id)
    return this.userTypeService.update(userTypeData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.userTypeService.delete(id);
  }
}
