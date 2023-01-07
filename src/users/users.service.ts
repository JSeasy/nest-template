import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: UserDto) {
    const { username } = createUserDto;
    const result = await this.userRepository.findOneBy({ username });
    if (result) {
      return '用户已存在';
    }
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await (
      await this.userRepository.find()
    ).map((item) => {
      const { password, ...result } = item;
      return result;
    });
  }
  async findOne(params: { [x: string]: string }) {
    return await this.userRepository.findOneBy({ ...params });
  }
}
