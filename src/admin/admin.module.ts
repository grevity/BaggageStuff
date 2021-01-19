import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './controller/admin.controller';
import { tbAdmin } from './Model/entity/admin.entity';
import { AdminService } from './service/admin.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      tbAdmin
    ]),
    JwtModule.register({
      secret:process.env.JWT_SECRET
  })
  ],
  controllers: [AdminController],
  providers: [AdminService]

})
export class AdminModule { }
