
export interface CreateImageProps {
    name: string;
    published: boolean;
    path: string;
    galleryId: string
}

export class Image {
    internalId: number;
    id: string;
    name: string;
    path: string;
    published: boolean;
    galleryInternalId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

    constructor(
        name: string,
        path: string,
        published: boolean,
        galleryInternalId: number,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date | null,
        internalId?: number,
        id?: string,
    ) {
        this.name = name;
        this.path = path;
        this.published = published;
        this.galleryInternalId = galleryInternalId;
        if (createdAt) this.createdAt = createdAt;
        if (updatedAt) this.updatedAt = updatedAt;
        if (deletedAt) this.deletedAt = deletedAt;
        if (internalId) this.internalId = internalId;
        if (id) this.id = id;
    }
}