import { join } from "path";
import { dataSources } from "./config";
import { DataSource } from "typeorm";


const entities = [
    `${join(__dirname, '../../../../..')}/libs/**/*.entity{.ts,.js}`,
    `${join(__dirname, '../../../../..')}/apps/**/*.entity{.ts,.js}`,
]

const type = process.env['DB_TYPE'] || 'postgres';

export const dataSourceConfig =  dataSources[type](entities);

export default new DataSource(dataSourceConfig);