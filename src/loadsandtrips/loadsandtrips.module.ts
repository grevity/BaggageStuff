import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserController } from "./Controllers/user.controller";
import { tbUser } from "./Models/entity/user.entity";
import { UserService } from "./Services/user.service";
import { JwtModule } from "@nestjs/jwt";
import { tbItems } from "./Models/entity/item.entity";
import { ItemController } from "./Controllers/item.controller";
import { ItemService } from "./Services/item.service";
import { tbLoads } from "./Models/entity/loads.entity";
import { tbTrips } from "./Models/entity/trips.entity";
import { TripController } from "./Controllers/trip.controller";
import { loadsController } from "./Controllers/load.controller";
import { TripsService } from "./Services/trips.service";
import { LoadsService } from "./Services/load.service";


@Module({
    imports: [

        TypeOrmModule.forFeature([
            tbUser,
            tbItems,
            tbLoads,
            tbTrips
        ]),
        JwtModule.register({
            secret:process.env.JWT_SECRET
        })
    ],
    
    controllers: [UserController,ItemController,TripController,loadsController],
    providers: [UserService,ItemService,TripsService,LoadsService]
})



export class AllModule { }