import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { tbLoads } from "../Models/entity/loads.entity";
import { LoadsService } from "../Services/load.service";


@Controller("load")
export class loadsController {

    constructor(
        private readonly loadsRepo: LoadsService) 
        {}


    @Get()
    getAllloads() {
        return this.loadsRepo.GetAllloads()
    }

    @Get("find/:id")
    getloadsById(@Param("id") id: number) {
        return this.loadsRepo.GetloadsById(id)

    }

    @Post("create")
    createloads(@Body() body: tbLoads) {
        return this.loadsRepo.Createloads(body)
    }
}