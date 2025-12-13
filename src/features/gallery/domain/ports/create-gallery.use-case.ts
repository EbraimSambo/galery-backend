import { CreateGalleryProps, Gallery } from "../entities/gallery.entity";


export abstract class CreateGalleryUseCase {
    abstract execute(data: CreateGalleryProps): Promise<Gallery>
}