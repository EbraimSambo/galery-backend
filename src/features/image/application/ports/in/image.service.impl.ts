import { Injectable, NotFoundException } from "@nestjs/common";
import { Image } from "src/features/image/domain/entities/image.entity";
import { ImageRepository } from "src/features/image/domain/ports/image.repository";
import { ImageService } from "src/features/image/domain/ports/image.service";

@Injectable()
export class ImageServiceImpl implements ImageService {

    constructor(private readonly imageRepository: ImageRepository) { }
    async findById(id: string): Promise<Image> {
        const image = await this.imageRepository.findById(id);
        if (!image) {
            throw new NotFoundException("Image not found");
        }
        return image;
    }
}