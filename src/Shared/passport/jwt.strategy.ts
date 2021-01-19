import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { config } from "dotenv";
import { Request } from 'express';

config()
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true
    });
  }

  async validate(req: Request, payload: any) {
    try {
      if (req.params && req.params.UserId == payload.id) {
        return { id: payload.id, phone: payload.phone };
      }
      


      throw Error()
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}