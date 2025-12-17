import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/shared/database/database.module';
import { GalleryRepository } from './domain/ports/gallery.repository';
import { PrismaGalleryRepositoryAdapter } from './adapters/out/persistence/prisma-gallery.repository';
import { GetGalleryUseCase } from './domain/ports/get-gallery.use-case';
import { GetGalleryUseCaseImpl } from './application/ports/in/get-gallery.use-case-impl';
import { GalleryController } from './adapters/in/rest/gallery.controller';
import { CreateGalleryUseCase } from './domain/ports/create-gallery.use-case';
import { CreateGalleryUseCaseImpl } from './application/ports/in/create-gallery.use-case.impl';

@Module({
  imports: [DataBaseModule],
  providers: [
    {
      provide: GalleryRepository,
      useClass: PrismaGalleryRepositoryAdapter,
    },
    {
      provide: GetGalleryUseCase,
      useClass: GetGalleryUseCaseImpl,
    },
    {
      provide: CreateGalleryUseCase,
      useClass: CreateGalleryUseCaseImpl,
    },
  ],
  controllers: [GalleryController],
  exports: [
    {
      provide: GetGalleryUseCase,
      useClass: GetGalleryUseCaseImpl,
    },
  ],
})
export class GalleryModule { }
