import { IsString } from "class-validator";

export class CreateGalleryDto {
    @IsString()
    name: string
}