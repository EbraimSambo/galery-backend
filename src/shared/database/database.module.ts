import { Module } from '@nestjs/common';
import { DataBaseService } from './infrastructure/database.service';

@Module({
    providers: [
        DataBaseService
    ],
    exports: [
        DataBaseService
    ]
})
export class DataBaseModule { }
