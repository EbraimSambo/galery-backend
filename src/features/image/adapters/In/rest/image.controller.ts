import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateImageUseCase } from 'src/features/image/domain/ports/create-image.use-case';
import { CreateImageDto } from './create-image.dto';
import { ImageMapper } from '../../out/mappers/image.mapper';
import { ImageService } from 'src/features/image/domain/ports/image.service';

@Controller('/images')
export class ImageController {
  constructor(
    private readonly createImageUseCase: CreateImageUseCase,
    private readonly imageService: ImageService,
  ) {}

  @Post()
  async create(@Body() body: CreateImageDto) {
    return await this.createImageUseCase
      .execute(ImageMapper.toProps(body))
      .then((res) => ImageMapper.toDto(res));
  }

  @Get()
  async getAll(@Query('limit') limit: string = '10', @Query('page') page: string = '1') {
    return await this.imageService.findAll({
      limit: Number(limit),
      page: Number(page),
    }).then((res)=> ImageMapper.toPaginationDto(res));
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.imageService
      .findById(id)
      .then((res) => ImageMapper.toDto(res));
  }
}
