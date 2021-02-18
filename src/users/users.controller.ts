import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'All Users returned';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `user #${id} Returned`;
  }

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return 'This action adds a new User';
  }
}
