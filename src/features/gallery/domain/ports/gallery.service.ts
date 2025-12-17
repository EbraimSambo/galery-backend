import { Gallery } from '../entities/gallery.entity';

export abstract class GalleryService {
  abstract findById(id: string): Promise<Gallery | null>;
  abstract findByIdValidated(id: string): Promise<Gallery>;
}
