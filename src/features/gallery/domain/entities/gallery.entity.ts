
export interface CreateGalleryProps {
    name: string
}


export class Gallery {
    constructor(
        public readonly name: string,
    ) { }

    internalId!: number;
    id!: string;
    createdAt!: Date;
    updatedAt!: Date;
    deletedAt!: Date | null;
}
