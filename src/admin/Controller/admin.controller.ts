import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Shared/guard/shared.guard';
import { tbAdmin } from '../Model/entity/admin.entity';
import { AdminService } from '../service/admin.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminRepo: AdminService) { }


    @Get()
    getAllAdmin() {
        return this.adminRepo.GetAllAdmin()
    }
    
    @UseGuards(JwtAuthGuard)
    @Get("find/:AdminId")
    getAdminById(@Param("AdminId") id: number) {
        return this.adminRepo.GetAdminById(id)

    }

    @Post("create")
    createAdmin(@Body() body: tbAdmin) {
        return this.adminRepo.createAdmin(body)
    }
}
