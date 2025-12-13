import { CreateGalleryProps, Gallery } from "src/features/gallery/domain/entities/gallery.entity";
import { Gallery as PrismaGallery } from "src/shared/database/infrastructure/generated/prisma";
import { CreateGalleryDto } from "../../in/rest/dto/gallery.dto";


export class GalleryMapper {
    static toDomain(gallery: PrismaGallery): Gallery {
        return new Gallery(gallery.name);
    }

    static toDomainProps(data: CreateGalleryProps): Gallery {
        return new Gallery(data.name);
    }

    static toCreateProps(dto: CreateGalleryDto): CreateGalleryProps {
        return {
            name: dto.name
        }
    }
}