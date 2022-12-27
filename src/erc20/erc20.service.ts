import { Inject, Injectable } from '@nestjs/common';
import { Erc20Dto, PartialErc20Dto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Erc20 } from './entities/erc20.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class Erc20Service {
  constructor(
    @InjectRepository(Erc20)
    private erc20Repository: Repository<Erc20>,
    @Inject(UsersService) private usersService: UsersService, // testing injection // @Inject('TokenProvider') private tokenProvider: string, // @Inject('ConstProvider') private constProvider: string, // @Inject(UsersService) private usersService: UsersService,
  ) // @Inject('FactoryProvider') private factoryProvider: string,
  {}
  async create(createErc20Dto: Erc20Dto) {
    return await this.erc20Repository.create(createErc20Dto);
  }

  async findAll(queryErc20Dto: PartialErc20Dto) {
    // console.log(this.usersService);
    // console.log(this.factoryProvider);
    return await this.erc20Repository.findBy(queryErc20Dto);
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
