import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AllModule } from "./loadsandtrips/loadsandtrips.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { entity } from "./entity";
import { AdminModule } from './admin/admin.module';


config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.DB_NAME,
      host: process.env.HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      type: 'postgres',
      synchronize: true,
      entities: entity
    }),
    AllModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
