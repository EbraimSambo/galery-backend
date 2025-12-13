import { Injectable, NotFoundException } from "@nestjs/common";
import { GalleryMapper } from "src/features/gallery/adapters/out/mappers/gallery.mapper";
import { CreateGalleryProps, Gallery } from "src/features/gallery/domain/entities/gallery.entity";
import { CreateGalleryUseCase } from "src/features/gallery/domain/ports/create-gallery.use-case";
import { GalleryRepository } from "src/features/gallery/domain/ports/gallery.repository";
import { GalleryService } from "src/features/gallery/domain/ports/gallery.service";


@Injectable()
export class CreateGalleryUseCaseImpl implements CreateGalleryUseCase {
    constructor(
        private readonly repository: GalleryRepository
    ) { }

    async execute(data: CreateGalleryProps): Promise<Gallery> {
        return await this.repository.create(GalleryMapper.toDomainProps(data));
    }
}