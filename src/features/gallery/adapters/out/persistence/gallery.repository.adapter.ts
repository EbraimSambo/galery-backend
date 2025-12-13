import { Injectable } from "@nestjs/common";
import { Gallery } from "src/features/gallery/domain/entities/gallery.entity";
import { GalleryRepository } from "src/features/gallery/domain/ports/gallery.repository";
import { DataBaseService } from "src/shared/database/infrastructure/database.service";
import { GalleryMapper } from "../mappers/gallery.mapper";

@Injectable()
export class GalleryRepositoryAdapter implements GalleryRepository {
    constructor(
        private database: DataBaseService
    ) { }

    async create(gallery: Gallery): Promise<Gallery> {
        const createGallery = await this.database.gallery.create({
            data: {
                ...gallery
            }
        })

        return GalleryMapper.toDomain(createGallery);
    }


    async findById(id: string): Promise<Gallery | null> {
        const gallery = await this.database.gallery.findUnique({
            where: {
                id,
            }
        })

        return gallery ? GalleryMapper.toDomain(gallery) : null;
    }
}
