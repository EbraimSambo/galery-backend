

export class ImageResponseDto {
    id: string;
    name: string;
    path: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    internalId: number;
    galleryInternalId: number;

    constructor(
        id: string,
        name: string,
        path: string,
        published: boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
        internalId: number,
        galleryInternalId: number
    ) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.published = published;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.internalId = internalId;
        this.galleryInternalId = galleryInternalId;
    }
}