import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({
    description: 'The name of an image',
    example: 'Whiskers',
    type: 'string',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The path of an image',
    example: 'https://example.com/image.jpg',
    type: 'string',
  })
  @IsString()
  path: string;

  @ApiProperty({
    description: 'The gallery id of an image',
    example: 'cmj629z4d0000uqwoce2il1rc',
    type: 'string',
  })
  @IsString()
  galleryId: string;

  @ApiProperty({
    description: 'The published status of an image',
    example: true,
    type: 'boolean',
  })
  @IsBoolean()
  published: boolean;
}
