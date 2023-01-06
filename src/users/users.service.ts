import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  async create(createUserDto: UserDto) {
    const { username } = createUserDto;
    const result = await this.usersRepository.findOneBy({ username });
    if (result) {
      return '用户已存在';
    }
    return await this.usersRepository.save(createUserDto);
  }

  async login(data: UserDto) {
    const { username, password } = data;

    const result = await this.usersRepository.findOneBy({ username });
    if (!result) {
      return '用户不存在';
    }
    if (result.password === password) {
      return result.id;
    }
    return '密码错误';
  }
  async findAll() {
    return await this.usersRepository.find();
  }
}
