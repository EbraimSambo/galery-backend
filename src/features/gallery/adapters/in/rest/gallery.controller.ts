import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGalleryDto } from './gallery.dto';
import { CreateGalleryUseCase } from 'src/features/gallery/domain/ports/create-gallery.use-case';
import { GalleryMapper } from '../../out/mappers/gallery.mapper';
import { GetGalleryUseCase } from 'src/features/gallery/domain/ports/get-gallery.use-case';

@Controller('galleries')
export class GalleryController {
  constructor(
    private readonly createGalleryUseCase: CreateGalleryUseCase,
    private readonly getGalleryUseCase: GetGalleryUseCase,
  ) { }

  @Post()
  async create(@Body() body: CreateGalleryDto) {
    return await this.createGalleryUseCase
      .execute(GalleryMapper.toCreateProps(body))
      .then((res) => GalleryMapper.toDto(res));
  }

  @Get(':id')
  async getGallery(@Param('id') id: string) {
    return await this.getGalleryUseCase
      .execute(id)
      .then((res) => GalleryMapper.toDto(res));
  }
}
