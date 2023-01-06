import { BaseEntity } from 'src/common/entities';
import { Erc20 } from 'src/erc20/entities/erc20.entity';
import { Entity, Column, OneToMany } from 'typeorm';
@Entity()
export class Users extends BaseEntity {
  @Column()
  username: string;
  @Column()
  password: string;
  @OneToMany(() => Erc20, (erc20) => erc20.user)
  constracts: Erc20[];
}
