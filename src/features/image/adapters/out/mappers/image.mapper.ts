
import { Image as PrismaImage } from "src/shared/database/infrastructure/generated/prisma";
import { CreateImageProps, Image } from "src/features/image/domain/entities/image.entity";
import { CreateImageDto } from "../../In/rest/create-image.dto";
import { ImageResponseDto } from "../../In/rest/image-response.dto";


export class ImageMapper {
    static toDomain(image: PrismaImage): Image {
        return new Image(
            image.name,
            image.path,
            image.published,
            image.galleryInternalId,
            image.createdAt,
            image.updatedAt,
            image.deletedAt,
            image.internalId,
            image.id
        )
    }

    static toDomainProps(raw: CreateImageProps, galleryInternalId: number): Image {
        return new Image(
            raw.name,
            raw.path,
            raw.published,
            galleryInternalId
        )
    }

    static toProps(dto: CreateImageDto): CreateImageProps {
        return {
            galleryId: dto.galleryId,
            name: dto.name,
            path: dto.path,
            published: dto.published
        };
    }


    static toDto(image: Image): ImageResponseDto {
        return new ImageResponseDto(
            image.id,
            image.name,
            image.path,
            image.published,
            image.createdAt,
            image.updatedAt,
            image.deletedAt,
            image.internalId,
            image.galleryInternalId
        );
    }

    static toPersistence(entity: Image) {
        return {
            id: entity.id,
            internalId: entity.internalId,
            name: entity.name,
            path: entity.path,
            published: entity.published,
            galleryInternalId: entity.galleryInternalId,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
        }
    }
}