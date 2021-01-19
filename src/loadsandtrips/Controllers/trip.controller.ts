import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { tbItems } from "../Models/entity/item.entity";
import { tbTrips } from "../Models/entity/trips.entity";
import { TripsService } from "../Services/trips.service";

@Controller("trip")
export class TripController {

    constructor(
        private readonly tripsRepo: TripsService) 
        {}


    @Get()
    getAllTrip() {
        return this.tripsRepo.GetAllTrips()
    }

    @Get("find/:id")
    getTripById(@Param("id") id: number) {
        return this.tripsRepo.GetTripsById(id)

    }

    @Post("create")
    createtrip(@Body() body: tbTrips) {
        return this.tripsRepo.CreateTrips(body)
    }
}