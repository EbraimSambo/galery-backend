import {
  Pagination,
  PropsPagination,
} from 'src/shared/domain/entities/pagination';
import { Image } from '../entities/image.entity';

export abstract class ImageService {
  abstract findById(id: string): Promise<Image>;
  abstract findAll(props: PropsPagination): Promise<Pagination<Image>>;
}
