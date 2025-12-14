import { Body, Controller, Post } from "@nestjs/common";
import { CreateImageUseCase } from "src/features/image/domain/ports/create-image.use-case";
import { CreateImageDto } from "./create-image.dto";
import { ImageMapper } from "../../out/mappers/image.mapper";

@Controller("/images")
export class ImageController {
    constructor(
        private readonly createImageUseCase: CreateImageUseCase
    ) { }

    @Post()
    async create(@Body() body: CreateImageDto) {
        return await this.createImageUseCase.execute(ImageMapper.toProps(body))
            .then((res) => ImageMapper.toDto(res));
    }
}