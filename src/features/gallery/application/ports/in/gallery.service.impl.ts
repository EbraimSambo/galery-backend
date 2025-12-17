import { Injectable, NotFoundException } from '@nestjs/common';
import { Gallery } from 'src/features/gallery/domain/entities/gallery.entity';
import { GalleryRepository } from 'src/features/gallery/domain/ports/gallery.repository';
import { GalleryService } from 'src/features/gallery/domain/ports/gallery.service';

@Injectable()
export class GalleryServiceImpl implements GalleryService {
  constructor(private readonly repository: GalleryRepository) {}

  async findById(id: string): Promise<Gallery | null> {
    return await this.repository.findById(id);
  }

  async findByIdValidated(id: string): Promise<Gallery> {
    const gallery = await this.repository.findById(id);

    if (!gallery) throw new NotFoundException('Gallery notfound');

    return gallery;
  }
}
