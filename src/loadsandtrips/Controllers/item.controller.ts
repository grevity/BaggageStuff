import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { tbItems } from "../Models/entity/item.entity";
import { ItemService } from "../Services/item.service";

@Controller("item")
export class ItemController {

    constructor(
        private readonly ItemRepo: ItemService) 
        {}


    @Get()
    getAllItem() {
        return this.ItemRepo.GetAllItems()
    }

    @Get("find/:id")
    getItemById(@Param("id") id: number) {
        return this.ItemRepo.GetItemById(id)

    }

    @Post("create")
    createItem(@Body() body: tbItems) {
        return this.ItemRepo.CreateItem(body)
    }
}