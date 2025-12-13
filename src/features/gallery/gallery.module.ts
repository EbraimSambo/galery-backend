import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/shared/database/database.module';
import { GalleryRepository } from './domain/ports/gallery.repository';
import { GalleryRepositoryAdapter } from './adapters/out/persistence/gallery.repository.adapter';
import { GalleryService } from './domain/ports/gallery.service';
import { GalleryServiceImpl } from './application/ports/in/gallery.service.impl';
import { GalleryController } from './adapters/in/rest/controllers/gallery.controller';
import { CreateGalleryUseCase } from './domain/ports/create-gallery.use-case';
import { CreateGalleryUseCaseImpl } from './application/ports/in/create-gallery.use-case.impl';

@Module({
    imports: [
        DataBaseModule
    ],
    providers: [
        {
            provide: GalleryRepository,
            useClass: GalleryRepositoryAdapter
        },
        {
            provide: GalleryService,
            useClass: GalleryServiceImpl
        },
        {
            provide: CreateGalleryUseCase,
            useClass: CreateGalleryUseCaseImpl
        }
    ],
    controllers: [
        GalleryController
    ],
    exports: [
        {
            provide: GalleryService,
            useClass: GalleryServiceImpl
        }
    ]
})
export class GalleryModule { }