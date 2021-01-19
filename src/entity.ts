import { tbAdmin } from "./admin/Model/entity/admin.entity";
import { tbItems } from "./loadsandtrips/Models/entity/item.entity";
import { tbLoads } from "./loadsandtrips/Models/entity/loads.entity";
import { tbTrips } from "./loadsandtrips/Models/entity/trips.entity";
import { tbUser } from "./loadsandtrips/Models/entity/user.entity";

export const entity=[
    tbUser,
    tbItems,
    tbTrips,
    tbLoads,
    tbAdmin
]