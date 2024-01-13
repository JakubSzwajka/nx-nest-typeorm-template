import { DataSourceOptions } from 'typeorm';

export const dataSource = (entities: DataSourceOptions['entities']): DataSourceOptions => {
    return {
        type: "postgres",
        entities,
        host: process.env['POSTGRES_HOST'] || "localhost",
        port: parseInt(process.env['POSTGRES_PORT'] || '5432'),
        username: process.env['POSTGRES_USERNAME'] || "postgres",
        password: process.env['POSTGRES_PASSWORD'] || "postgres",
        database: process.env['POSTGRES_DATABASE'] || "database",
        migrations: [
            `${__dirname}/../../../migrations/*{.ts,.js}`
        ]
    }
} 