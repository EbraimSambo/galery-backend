import { Module } from '@nestjs/common';
import { DataBaseModule } from '../../shared/database/database.module';
import { ImageRepository } from './domain/ports/iamge.repository';
import { ImageRepositoryAdapter } from './adapters/out/persistence/image.repository.adapetr';
import { CreateImageUseCase } from './domain/ports/create-image.use-case';
import { CreateImageUseCaseImpl } from './application/ports/in/create-image.use-case-impl';
import { ImageController } from './adapters/In/rest/controllers/image.controller';
import { GalleryModule } from '../gallery/gallery.module';

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
        }
    ]
})
export class ImageModule { }