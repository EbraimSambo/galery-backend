export interface CreateGalleryProps {
  name: string;
}

export class Gallery {
  name: string;
  internalId: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    name: string,
    internalId?: number,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date | null,
  ) {
    this.name = name;
    if (internalId) this.internalId = internalId;
    if (id) this.id = id;
    if (createdAt) this.createdAt = createdAt;
    if (updatedAt) this.updatedAt = updatedAt;
    if (deletedAt) this.deletedAt = deletedAt;
  }

  static create(name: string): Gallery {
    return new Gallery(name);
  }
}
