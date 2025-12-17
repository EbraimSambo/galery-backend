import { Injectable, NotFoundException } from '@nestjs/common';
import { Gallery } from 'src/features/gallery/domain/entities/gallery.entity';
import { GalleryRepository } from 'src/features/gallery/domain/ports/gallery.repository';
import { GetGalleryUseCase } from 'src/features/gallery/domain/ports/get-gallery.use-case';

@Injectable()
export class GetGalleryUseCaseImpl implements GetGalleryUseCase {
    constructor(private readonly repository: GalleryRepository) { }

    async execute(id: string): Promise<Gallery> {
        const gallery = await this.repository.findById(id);

        if (!gallery) throw new NotFoundException('Gallery notfound');

        return gallery;
    }
}
