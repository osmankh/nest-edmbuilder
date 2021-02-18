import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.usersService.all());
  }

  @Get(':id')
  getOne(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json(this.usersService.one(id));
  }

  @Post()
  async create(@Body() userDto: CreateUserDto, @Res() res: Response) {
    const createdID: number = this.usersService.create({
      id: null,
      name: userDto.name,
      username: userDto.username,
      password: userDto.password
    });

    res.status(HttpStatus.CREATED).json(this.usersService.one(createdID));
  }
}
