import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Erc20 } from './erc20/entities/erc20.entity';
import { Erc20Module } from './erc20/erc20.module';
import { password } from '../security';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    Erc20Module,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '118.31.188.117',
      port: 3306,
      username: 'root',
      password,
      database: 'test',
      entities: [Erc20],
      synchronize: true,
      // timezone: '+08:00',
      dateStrings: true,
      // driver: require('mysql2'),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
