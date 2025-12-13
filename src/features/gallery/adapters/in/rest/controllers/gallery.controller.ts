import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateGalleryDto } from "../dto/gallery.dto";
import { CreateGalleryUseCase } from "src/features/gallery/domain/ports/create-gallery.use-case";
import { GalleryMapper } from "../../../out/mappers/gallery.mapper";
import { GalleryService } from "src/features/gallery/domain/ports/gallery.service";

@Controller("galleries")
export class GalleryController {

    constructor(
        private readonly createGalleryUseCase: CreateGalleryUseCase,
        private readonly galleryService: GalleryService
    ) { }


    @Post()
    async create(@Body() body: CreateGalleryDto) {
        return await this.createGalleryUseCase.execute(GalleryMapper.toCreateProps(body))
    }


    @Get(":id")
    async getGallery(
        @Param("id") id: string
    ) {
        return await this.galleryService.findByIdValidated(id)
    }

}