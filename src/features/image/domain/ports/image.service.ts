import { Image } from "../entities/image.entity";


export abstract class ImageService {
    abstract findById(id: string): Promise<Image>
}