import { BaseEntity } from 'src/common/entities';
import { Entity, Column } from 'typeorm';

@Entity()
export class Erc20 extends BaseEntity {
  @Column()
  contractAddress: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  totalSupply: string;

  @Column()
  precision: string;
}
