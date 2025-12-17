import { Injectable } from '@nestjs/common';
import {
  CreateGalleryProps,
  Gallery,
} from 'src/features/gallery/domain/entities/gallery.entity';
import { CreateGalleryUseCase } from 'src/features/gallery/domain/ports/create-gallery.use-case';
import { GalleryRepository } from 'src/features/gallery/domain/ports/gallery.repository';

@Injectable()
export class CreateGalleryUseCaseImpl implements CreateGalleryUseCase {
  constructor(private readonly repository: GalleryRepository) { }

  async execute(data: CreateGalleryProps): Promise<Gallery> {
    return await this.repository.create(Gallery.create(data.name));
  }
}
