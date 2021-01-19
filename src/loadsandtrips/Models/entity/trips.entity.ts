import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { tbItems } from "./item.entity";
import { tbUser } from "./user.entity";

@Entity()

export class tbTrips {
    @PrimaryGeneratedColumn()
    Id: number

    @ManyToOne(type=>tbUser)      //multiple Baggage deals sign by one person
    UserId: number

    @ManyToOne(type=>tbItems)   //multiple Items carrying by one person
    TtemId: number

    @Column({ select: false })
    Pickup: string

    @Column({ select: false })
    Destination: string

    @Column({ select: false ,nullable:true })
    AvailableUntilDate: Date

    @Column({ select: false, type: "double precision" })
    WillingToAccept: number

    @Column({ select: false, type: "double precision" })
    DealAmount: number

    @Column({ select: false })
    WeightLimit: string

    @Column({ select: false ,nullable:true    })
    DepartureDate: Date

    @Column({ select: false })
    DimensionLimit: string

    @CreateDateColumn()
    CreatedAt: Date

    @UpdateDateColumn()
    UpdateAt: Date
}