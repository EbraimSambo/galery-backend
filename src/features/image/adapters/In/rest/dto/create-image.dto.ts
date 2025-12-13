import { IsBoolean, IsString } from "class-validator";


export class CreateImageDto {
    @IsString()
    name: string;

    @IsString()
    path: string;

    @IsString()
    galleryId: string;

    @IsBoolean()
    published: boolean;
}