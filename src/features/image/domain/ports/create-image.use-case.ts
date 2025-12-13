import { CreateImageProps, Image } from "../entities/image.entity";



export abstract class CreateImageUseCase {
    abstract execute(data: CreateImageProps): Promise<Image>
}