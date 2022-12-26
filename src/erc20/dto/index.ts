import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class Erc20Dto {
  @IsNotEmpty()
  contractAddress: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  symbol: string;

  @IsNotEmpty()
  totalSupply: string;

  @IsNotEmpty()
  precision: string;
}

export class PartialErc20Dto extends PartialType(Erc20Dto) {}
