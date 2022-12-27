import { Module } from '@nestjs/common';
import { Erc20Service } from './erc20.service';
import { Erc20Controller } from './erc20.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Erc20 } from './entities/erc20.entity';

import {
  TokenProvider,
  ConstProvider,
  ClassProvider,
  FactoryProvider,
} from 'src/common/provider';
import { Users } from 'src/users/entities/user.entity';

@Module({
  controllers: [Erc20Controller],
  providers: [
    Erc20Service,
    // 测试依赖注入
    TokenProvider,
    ConstProvider,
    ClassProvider,
    FactoryProvider,
  ],
  imports: [TypeOrmModule.forFeature([Erc20, Users])],
})
export class Erc20Module {}
