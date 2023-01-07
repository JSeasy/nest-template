import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authSevice: AuthService,
  ) {}

  @Post('/regist')
  create(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() createUserDto: UserDto) {
    return this.authSevice.login(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
