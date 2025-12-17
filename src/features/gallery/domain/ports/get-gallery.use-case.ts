import { Gallery } from '../entities/gallery.entity';

export abstract class GetGalleryUseCase {
    abstract execute(id: string): Promise<Gallery>;
}
