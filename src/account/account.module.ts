import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [UsersModule, TypeOrmModule.forFeature([Account])],
})
export class AccountModule {}
