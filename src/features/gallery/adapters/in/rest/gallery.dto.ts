import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { IsString } from "class-validator";

@ApiSchema()
export class CreateGalleryDto {
    @IsString()
    @ApiProperty({
        description: 'The name of a gallery',
        example: 'Whiskers',
        type: "string"
    })
    name: string
}