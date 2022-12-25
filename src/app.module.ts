import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Erc20 } from './erc20/entities/erc20.entity';
import { Erc20Module } from './erc20/erc20.module';

@Module({
  imports: [
    Erc20Module,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '118.31.188.117',
      port: 3306,
      username: 'root',
      password: '123123',
      database: 'test',
      entities: [Erc20],
      synchronize: true,
      // timezone: '+08:00',
      dateStrings: true,
      // driver: require('mysql2'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
