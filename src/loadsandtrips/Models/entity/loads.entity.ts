import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn,CreateDateColumn, ManyToOne } from "typeorm";
import { tbItems } from "./item.entity";
import { tbUser } from "./user.entity";

@Entity()

export class tbLoads {
    @PrimaryGeneratedColumn()
    Id: number

    @ManyToOne(type=>tbUser)
    UserId: number

    @ManyToOne(type=>tbItems)
    TtemId: number

    @Column({select:false})
    Pickup:string

    @Column({select:false})
    Destination:string

    @Column({select:false,nullable:true})
    DeliverBeforeDate:Date

    @Column({select:false, type:"double precision"})
    DealAmount: number

    @CreateDateColumn()
    CreatedAt:Date

    @UpdateDateColumn()
    UpdateAt:Date
}