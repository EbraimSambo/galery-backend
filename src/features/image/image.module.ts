import { Module } from '@nestjs/common';
import { DataBaseModule } from '../../shared/database/database.module';
import { ImageRepository } from './domain/ports/image.repository';
import { ImageRepositoryAdapter } from './adapters/out/persistence/image.repository.adapter';
import { CreateImageUseCase } from './domain/ports/create-image.use-case';
import { CreateImageUseCaseImpl } from './application/ports/in/create-image.use-case-impl';
import { GalleryModule } from '../gallery/gallery.module';
import { ImageController } from './adapters/In/rest/image.controller';
import { ImageServiceImpl } from './application/ports/in/image.service.impl';
import { ImageService } from './domain/ports/image.service';

@Module({
    imports: [
        DataBaseModule,
        GalleryModule
    ],
    controllers: [
        ImageController
    ],
    providers: [
        {
            provide: ImageRepository,
            useClass: ImageRepositoryAdapter
        },
        {
            provide: CreateImageUseCase,
            useClass: CreateImageUseCaseImpl
        },
        {
            provide: ImageService,
            useClass: ImageServiceImpl
        }
    ]
})
export class ImageModule { }