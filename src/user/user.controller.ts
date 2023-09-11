import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './userDto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<UserDto[]> {
    return this.userService.FindAll();
  }

  @Get('users/:id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  // @Post('users')
  // async create(@Body() user: User): Promise<User> {
  //   return this.userService.create(user);
  // }

  @Post('users')
  @UsePipes(ValidationPipe)
  async create(@Body() user: UserDto): Promise<User> {
    return this.userService.create(user);
  }

  // @Put('users/:id')
  // async update(@Param('id') id: number, @Body() user: User): Promise<any> {
  //   return this.userService.update(id, user);
  // }

  @Put('users/:id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: number, @Body() user: UserDto): Promise<any> {
    return this.userService.update(id, user);
  }

  @Delete('users/:id')
  async delete(@Param('id') id: number): Promise<any> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.userService.delete(id);
  }
}
