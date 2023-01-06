import { BaseEntity } from 'src/common/entities';
import { Users } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

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

  @ManyToOne(() => Users, (user) => user.constracts)
  @JoinColumn()
  user: Users;
}
