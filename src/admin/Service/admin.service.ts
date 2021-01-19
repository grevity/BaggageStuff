import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbAdmin } from '../Model/entity/admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(tbAdmin) private readonly AdminRepo: Repository<tbAdmin>,
        private readonly jwtService:JwtService
    ) { }

    async createAdmin(body: tbAdmin) {
        try {
            const savedAdmin = await this.AdminRepo.save(body)
            const accessToken = this.jwtService.sign({ id: savedAdmin.Id },
                {
                    expiresIn: "30d"
                }
            )

            return {
                statusCode: 201,
                message: "Admin Created",
        
                 data: {
                    UserId: savedAdmin.Id,
                    accessToken: accessToken
                    }

            }

        } catch (error) {
            throw error

        }
    }


    async GetAllAdmin() {
        try {
            return this.AdminRepo.find({
                select: ["Id", "UserName", "Name", "Password"]
            })
        } catch (error) {
            throw error
        }
    }


    async GetAdminById(id: number) {
        try {
            const AdminId = await this.AdminRepo.findOne({
                where: { Id: id },
                select: ["Id", "UserName", "Name", "Password"]
            })

            if (AdminId == null)
                throw new NotFoundException("Admin Not Found")
            return AdminId
            
        } catch (error) {
            throw error
        }
    }

}
