import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()

export class tbItems {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({ select: false })
    Name: string

    @Column({ select: false })
    Weight: string

    @Column({ select: false })
    Dimension: string

    @Column({ select: false, type: "double precision" })
    Price: number

    @Column()
    Image: string

    @CreateDateColumn()
    CreatedAt: Date

    @UpdateDateColumn()
    UpdateAt: Date
}