import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "dotenv";
import { JwtStrategy } from "./passport/jwt.strategy";

config()
@Module({
  imports:[
    TypeOrmModule.forFeature([
      
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ 
      secret: process.env.JWT_SECRET,
     }),
  ],
  providers: [ JwtStrategy ],
  exports:[],
  controllers: []
  
})
export class SharedModule {}
