import { Injectable } from '@nestjs/common';
import { Erc20Dto, PartialErc20Dto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Erc20 } from './entities/erc20.entity';
import { IUserPayload } from 'src/types';
import { UserService } from 'src/users/users.service';

@Injectable()
export class Erc20Service {
  constructor(
    @InjectRepository(Erc20)
    private erc20Repository: Repository<Erc20>,
    private userService: UserService,
  ) {}
  async create(createErc20Dto: Erc20Dto, { username }: IUserPayload) {
    const user = await this.userService.findOne({ username });
    return await this.erc20Repository.save({ ...createErc20Dto, user });
  }

  async findAll(queryErc20Dto: PartialErc20Dto, { username }: IUserPayload) {
    const res = await this.erc20Repository.findBy({ user: { username } });
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} erc20`;
  }

  update(id: number, updateErc20Dto: PartialErc20Dto) {
    return `This action updates a #${id} erc20`;
  }

  remove(id: number) {
    return `This action removes a #${id} erc20`;
  }
}
