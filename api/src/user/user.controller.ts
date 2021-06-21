import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  index(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() userData: User): Promise<any> {
    return this.userService.create(userData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    console.log('Update #' + userData.id)
    return this.userService.update(userData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.userService.delete(id);
  }
}
