import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { get } from "http";
import { tbUser } from "../Models/entity/user.entity";
import { UserService } from "../Services/user.service";
import {  } from "module";
import { JwtAuthGuard } from "src/Shared/guard/shared.guard";
@Controller("user")
export class UserController {
    constructor(
        private readonly userRepo: UserService
    ) { }


    @Post("create")
    createUser(@Body() body: tbUser) {
        return this.userRepo.createUser(body)
    }

    @Get()
    getAllUser() {
        return this.userRepo.getAllUser()
    }
    @UseGuards(JwtAuthGuard)
    @Get("find/:UserId")
    getUserById(@Param("UserId") id: number) {
        return this.userRepo.getUserById(id)
    }
}