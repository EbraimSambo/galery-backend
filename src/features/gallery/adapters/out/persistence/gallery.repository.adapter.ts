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
        return await this.database.gallery.create({
            data: GalleryMapper.toPersistence(gallery)
        }).then((res) => GalleryMapper.toDomain(res));
    }


    async findById(id: string): Promise<Gallery | null> {
        return await this.database.gallery.findUnique({
            where: {
                id,
            }
        }).then((res) => res ? GalleryMapper.toDomain(res) : null);
    }
}
