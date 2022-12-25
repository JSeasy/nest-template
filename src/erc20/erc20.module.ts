import { Module } from '@nestjs/common';
import { Erc20Service } from './erc20.service';
import { Erc20Controller } from './erc20.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Erc20 } from './entities/erc20.entity';

@Module({
  controllers: [Erc20Controller],
  providers: [Erc20Service],
  imports: [TypeOrmModule.forFeature([Erc20])],
})
export class Erc20Module {}
