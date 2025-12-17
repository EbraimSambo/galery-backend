import {
  Pagination,
  PropsPagination,
} from 'src/shared/domain/entities/pagination';
import { Image } from '../entities/image.entity';

export abstract class ImageRepository {
  abstract create(image: Image): Promise<Image>;
  abstract findById(id: string): Promise<Image | null>;
  abstract findAll(props: PropsPagination): Promise<Pagination<Image>>;
}
