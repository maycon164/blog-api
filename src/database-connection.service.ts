import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { type } from "os";
import { DB_DB, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config";

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name: 'default',
            type: 'postgres',
            host: DB_HOST,
            port: Number(DB_PORT),
            username: DB_USER,
            password: DB_PASSWORD,
            database: DB_DB,
            synchronize: true,
            dropSchema: false,
            logging: true,
            entities: ['dist/**/*.entity.js']
        }
    }
}
