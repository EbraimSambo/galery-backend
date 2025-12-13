import { Module } from '@nestjs/common';
import { ImageModule } from './features/image/image.module';
import { GalleryModule } from './features/gallery/gallery.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ImageModule,
    GalleryModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
})
export class AppModule { }
