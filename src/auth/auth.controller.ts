import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/users/dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() data: UserDto) {
    return await this.authService.login(data);
  }
}
