import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  getOne(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      name: 'osman',
    });
  }

  @Post()
  async create(@Body() userDto: CreateUserDto, @Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
}
