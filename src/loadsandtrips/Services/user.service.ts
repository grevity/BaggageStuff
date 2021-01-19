import {  Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { tbUser } from "../Models/entity/user.entity";
import { JwtService } from "@nestjs/jwt";
import { config } from "dotenv";
import { InjectRepository } from "@nestjs/typeorm";
config()

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(tbUser)
        private readonly userRepo: Repository<tbUser>,
        private readonly jwtService: JwtService

    ) { }


    async createUser(body: tbUser) {
        try {
            const savedUser = await this.userRepo.save(body)
            const accessToken = this.jwtService.sign({ id: savedUser.Id },
                {
                    expiresIn: "30d"
                }
            )

            return {
                statusCode: 201,
                message: "UserCreated",
        
                 data: {
                    UserId: savedUser.Id,
                    accessToken: accessToken
                    }

            }

        } catch (error) {
            throw error

        }
    }



    async getAllUser() {
        try {
            return await this.userRepo.find({

                select:["Id","Name","Phone","Email","Gender","UserName","ProfileImage","GoogleId","FacebookId"]
            })
        } catch (error) {
            throw error
        }
    }

    async getUserById(id: number) {
        try {

            const userId = await this.userRepo.findOne({
                where:{Id:id},
                select:["Id","Name","Phone","Email","Gender","UserName","ProfileImage","GoogleId","FacebookId"]
            })

            if(userId==null)
            throw new NotFoundException("User Not Found")
            return userId
        } catch (error) {
            throw error
        }

    }


}