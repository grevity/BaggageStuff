import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { config } from "dotenv";
import { Repository } from "typeorm";
import { tbTrips } from "../Models/entity/trips.entity";

config()

@Injectable()
export class TripsService {

    constructor(
        @InjectRepository(tbTrips) 
        private readonly tripsRepo: Repository<tbTrips>
    ) { }

    async CreateTrips(body: tbTrips) {
        try {
            const SavedTrips = await this.tripsRepo.save(body)
            return {
                statusCode: 201,
                message: "Trips Created",
                data: {
                    trips: SavedTrips
                }
            }
        } catch (error) {
            throw error
        }
    }


    async GetAllTrips() {
        try {
            return this.tripsRepo.find({
                select:["Id","Pickup","Destination","DepartureDate","DealAmount","DimensionLimit","TtemId","UserId","WeightLimit","WillingToAccept"]
            })
        } catch (error) {
            throw error
        }
    }


    async GetTripsById(id: number) {
        try {
            const tripsId = await this.tripsRepo.findOne({
                where: { Id: id },
                select:["Id","Pickup","Destination","DepartureDate","DealAmount","DimensionLimit","TtemId","UserId","WeightLimit","WillingToAccept"]
            })

            if (tripsId == null)
                throw new NotFoundException("Trips Not Found")
            return tripsId
            
        } catch (error) {
            throw error
        }
    }
}