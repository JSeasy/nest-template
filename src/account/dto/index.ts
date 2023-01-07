import { IsNotEmpty } from 'class-validator';
export class AccountBody {
  @IsNotEmpty()
  accountAddress: string;
}
