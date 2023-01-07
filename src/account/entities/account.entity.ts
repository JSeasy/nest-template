import { BaseEntity } from 'src/common/entities';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Account extends BaseEntity {
  @Column()
  accountAddress: string;

  @ManyToOne(() => User, (user) => user.accounts)
  @JoinColumn()
  user: User;
}
