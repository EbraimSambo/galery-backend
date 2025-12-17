import { Injectable } from "@nestjs/common";
import { Image } from "src/features/image/domain/entities/image.entity";
import { ImageRepository } from "src/features/image/domain/ports/image.repository";
import { DataBaseService } from "src/shared/database/infrastructure/database.service";
import { ImageMapper } from "../mappers/image.mapper";
import { Pagination, PropsPagination } from "src/shared/domain/entities/pagination";

@Injectable()
export class ImageRepositoryAdapter implements ImageRepository {
    constructor(
        private database: DataBaseService
    ) { }

    async create(image: Image): Promise<Image> {
        return await this.database.image.create({
            data: ImageMapper.toPersistence(image),
        }).then((res) => ImageMapper.toDomain(res));
    }

    async findById(id: string): Promise<Image | null> {
        return await this.database.image.findUnique({
            where: { id },
        }).then((res) => res ? ImageMapper.toDomain(res) : null);
    }

    async findAll(props: PropsPagination): Promise<Pagination<Image>> {
        const { page, limit } = props;
        const [ images, total ] = await this.database.$transaction([
            this.database.image.findMany({
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    createdAt: 'desc',
                },
            }),
            this.database.image.count()
        ])
        const data = images.length ? images.map((image) => ImageMapper.toDomain(image)) : [];
        return { data, total, page, limit };
    }
}