import { Injectable, NotFoundException } from "@nestjs/common";
import { GalleryService } from "src/features/gallery/domain/ports/gallery.service";
import { ImageMapper } from "src/features/image/adapters/out/mappers/image.mapper";

import { CreateImageProps, Image } from "src/features/image/domain/entities/image.entity";
import { CreateImageUseCase } from "src/features/image/domain/ports/create-image.use-case";
import { ImageRepository } from "src/features/image/domain/ports/image.repository";
import { Gallery } from "src/shared/database/infrastructure/generated/prisma";

@Injectable()
export class CreateImageUseCaseImpl implements CreateImageUseCase {
    constructor(
        private readonly repository: ImageRepository,
        private readonly galleryService: GalleryService
    ) { }

    async execute(data: CreateImageProps): Promise<Image> {
        const gallery = await this.validateGallery(data.galleryId);
        return await this.repository.create(ImageMapper.toDomainProps(data, gallery.internalId));
    }

    async validateGallery(galleryId: string): Promise<Gallery> {
        const gallery = await this.galleryService.findById(galleryId);

        if (!gallery) throw new NotFoundException("Gallery Not Found");

        return gallery;
    }
}