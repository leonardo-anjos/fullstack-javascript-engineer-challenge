import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserTypeModule } from './user-type/user-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { WinstonLoggerModule } from './winston-logger/winston-logger.module';

@Module({
  imports: [
    UserModule,
    UserTypeModule,
    TypeOrmModule.forRoot({
      // type: process.env.DB_CONNECTION,
      // host: process.env.DB_HOST,
      // port: process.env.DB_PORT,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_DATABASE,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true,
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    WinstonLoggerModule,
    // TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
