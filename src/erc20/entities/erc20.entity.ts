import { BaseEntity } from 'src/common/entities';
import { User } from 'src/users/entities/user.entity';
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

  @ManyToOne(() => User, (user) => user.constracts)
  @JoinColumn()
  user: User;
}
