import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  async create(accountBody: AccountBody, { username }: { username: string }) {
    const user = await this.userService.findOne({ username });
    const account = await this.accountRepository.save({
      ...accountBody,
      user,
    });
    return '绑定成功';
  }

  findAll() {
    return `This action returns all account`;
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
