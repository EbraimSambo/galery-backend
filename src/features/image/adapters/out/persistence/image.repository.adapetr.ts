import { Injectable } from "@nestjs/common";
import { Image } from "src/features/image/domain/entities/image.entity";
import { ImageRepository } from "src/features/image/domain/ports/iamge.repository";
import { DataBaseService } from "src/shared/database/infrastructure/database.service";
import { ImageMapper } from "../mappers/image.mapper";

@Injectable()
export class ImageRepositoryAdapter implements ImageRepository {
    constructor(
        private database: DataBaseService
    ) { }

    async create(image: Image): Promise<Image> {
        return await this.database.image.create({
            data: {
                ...image,
            }
        }).then((res) => ImageMapper.toDomain(res));
    }
}