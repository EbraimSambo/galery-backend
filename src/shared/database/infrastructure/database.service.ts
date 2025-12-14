
import { Injectable } from '@nestjs/common';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from './generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class DataBaseService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL as string })
        super({ adapter });
    }
}
