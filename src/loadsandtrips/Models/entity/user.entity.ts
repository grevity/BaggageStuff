import { Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn,CreateDateColumn } from "typeorm";

@Entity()

export class tbUser {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({select:false})
    Name: string

    @Column({select:false})
    Phone: number

    @Column({select:false})
    FacebookId: string

    @Column({select:false})
    GoogleId: string

    @Column({select:false})
    Email: string

    @Column({select:false})
    Gender: string

    @Column({select:false})
    ProfileImage: string

    @Column({select:false})
    UserName: string

    @Column({select:false})
    Password: string

    @CreateDateColumn()
    CreatedAt:Date

    @UpdateDateColumn()
    UpdateAt:Date
}