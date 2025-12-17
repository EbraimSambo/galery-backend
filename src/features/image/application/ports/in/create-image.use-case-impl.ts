import { Injectable, NotFoundException } from '@nestjs/common';
import { Gallery } from 'src/features/gallery/domain/entities/gallery.entity';
import { GetGalleryUseCase } from 'src/features/gallery/domain/ports/get-gallery.use-case';
import { ImageMapper } from 'src/features/image/adapters/out/mappers/image.mapper';

import {
  CreateImageProps,
  Image,
} from 'src/features/image/domain/entities/image.entity';
import { CreateImageUseCase } from 'src/features/image/domain/ports/create-image.use-case';
import { ImageRepository } from 'src/features/image/domain/ports/image.repository';

@Injectable()
export class CreateImageUseCaseImpl implements CreateImageUseCase {
  constructor(
    private readonly repository: ImageRepository,
    private readonly galleryService: GetGalleryUseCase,
  ) { }

  async execute(data: CreateImageProps): Promise<Image> {
    await this.validateGallery(data.galleryId);
    return await this.repository.create(
      ImageMapper.toDomainProps(data, 1),
    );
  }

  private async validateGallery(galleryId: string): Promise<Gallery> {
    const gallery = await this.galleryService.execute(galleryId);

    if (!gallery) throw new NotFoundException('Gallery Not Found');

    return gallery;
  }
}
