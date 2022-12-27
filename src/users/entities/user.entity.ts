import { BaseEntity } from 'src/common/entities';
import { Entity, Column } from 'typeorm';
@Entity()
export class Users extends BaseEntity {
  @Column()
  userName: string;
  @Column()
  password: string;
}
