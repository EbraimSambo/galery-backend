import { Image } from "../entities/image.entity";


export abstract class ImageRepository {
    abstract create(image: Image): Promise<Image>
    abstract findById(id: string): Promise<Image | null>
}