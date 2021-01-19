import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { config } from "dotenv";
import { Repository } from "typeorm";
import { tbItems } from "../Models/entity/item.entity";

config()

@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(tbItems) private readonly itemRepo: Repository<tbItems>
    ) { }

    async CreateItem(body: tbItems) {
        try {
            const SavedItem = await this.itemRepo.save(body)
            return {
                statusCode: 201,
                message: "Item Created",
                data: {
                    SavedItem: SavedItem
                }
            }
        } catch (error) {
            throw error
        }
    }


    async GetAllItems() {
        try {
            return this.itemRepo.find({
                select: ["Id", "Image", "Name", "Price", "Weight", "Dimension"]
            })
        } catch (error) {
            throw error
        }
    }


    async GetItemById(id: number) {
        try {
            const ItemId = await this.itemRepo.findOne({
                where: { Id: id },
                select: ["Id", "Image", "Name", "Price", "Weight", "Dimension"]
            })

            if (ItemId == null)
                throw new NotFoundException("Item Not Found")
            return ItemId
            
        } catch (error) {
            throw error
        }
    }
}