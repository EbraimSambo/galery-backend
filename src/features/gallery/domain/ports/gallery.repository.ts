import { Gallery } from '../entities/gallery.entity';

export abstract class GalleryRepository {
  abstract create(gallery: Gallery): Promise<Gallery>;
  abstract findById(id: string): Promise<Gallery | null>;
}
