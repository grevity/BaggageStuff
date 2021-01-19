import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()

export class tbAdmin {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({ select: false, nullable: false })
    Name: string


    @Column({ select: false, nullable: false })
    UserName: string

    @Column({ select: false, nullable: false })
    Password: string

    @CreateDateColumn()
    CreatedAt: Date

    @UpdateDateColumn()
    UpdateAt: Date
}