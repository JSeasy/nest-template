import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/users/dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AccountBody } from './dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    private userService: UsersService,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}
  async create(
    accountBody: AccountBody,
    { username, id }: { username: string; id: string },
  ) {
    const { accountAddress } = accountBody;
    const account = await this.accountRepository.findOneBy({ accountAddress });
    if (account) {
      return '钱包地址已存在';
    }
    const user = await this.userService.findOne({ username });
    await this.accountRepository.save({
      ...accountBody,
      user,
    });
    return '绑定成功';
  }

  async findAll({ username, id }: { username: string; id: string }) {
    // 查询关联关系
    return await this.accountRepository.findBy({
      user: { username },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: AccountBody) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
