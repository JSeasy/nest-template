import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private authSevice: AuthService,
  ) {}

  @Post('/regist')
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() createUserDto: UserDto) {
    return this.authSevice.login(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
