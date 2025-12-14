import { CreateGalleryProps, Gallery } from "src/features/gallery/domain/entities/gallery.entity";
import { Gallery as PrismaGallery } from "src/shared/database/infrastructure/generated/prisma";
import { CreateGalleryDto } from "../../in/rest/gallery.dto";
import { GalleryResponseDto } from "../../in/rest/gallery-response.dto";


export class GalleryMapper {
    static toDomain(gallery: PrismaGallery): Gallery {
        return new Gallery(
            gallery.name,
            gallery.internalId,
            gallery.id,
            gallery.createdAt,
            gallery.updatedAt,
            gallery.deletedAt
        );
    }

    static toDomainProps(data: CreateGalleryProps): Gallery {
        return new Gallery(data.name);
    }

    static toCreateProps(dto: CreateGalleryDto): CreateGalleryProps {
        return {
            name: dto.name
        }
    }

    static toDto(gallery: Gallery): GalleryResponseDto {
        return new GalleryResponseDto(
            gallery.id,
            gallery.name,
            gallery.createdAt,
            gallery.updatedAt,
            gallery.updatedAt
        );
    }

    static toPersistence(entity: Gallery) {
        return {
            name: entity.name,
            internalId: entity.internalId,
            id: entity.id,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
        }
    }
}