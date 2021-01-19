import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { config } from "dotenv";
import { Repository } from "typeorm";
import { tbLoads } from "../Models/entity/loads.entity";

config()

@Injectable()
export class LoadsService {

    constructor(
        @InjectRepository(tbLoads) 
        private readonly loadRepo: Repository<tbLoads>
    ) { }

    async Createloads(body: tbLoads) {
        try {
            const Savedloads = await this.loadRepo.save(body)
            return {
                statusCode: 201,
                message: "loads Created",
                data: {
                    loads: Savedloads
                }
            }
        } catch (error) {
            throw error
        }
    }


    async GetAllloads() {
        try {
            return this.loadRepo.find({
                select:["Id","Pickup","Destination","DeliverBeforeDate","DealAmount","TtemId","UserId"]
            })
        } catch (error) {
            throw error
        }
    }


    async GetloadsById(id: number) {
        try {
            const loadsId = await this.loadRepo.findOne({
                where: { Id: id },
                select:["Id","Pickup","Destination","DeliverBeforeDate","DealAmount","TtemId","UserId"]
            })

            if (loadsId == null)
                throw new NotFoundException("loads Not Found")
            return loadsId
            
        } catch (error) {
            throw error
        }
    }
}