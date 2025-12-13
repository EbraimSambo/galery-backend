import { Image } from "../entities/image.entity";


export abstract class ImageRepository {
    abstract create(image: Image): Promise<Image>
}