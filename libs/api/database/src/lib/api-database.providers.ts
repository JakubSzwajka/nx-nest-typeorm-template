import { DB_CON_TOKEN } from "./api-database.constants";
import DATA_SOURCE from "./api-database.config";

export const databaseProviders = [
    {
        provide: DB_CON_TOKEN,
        useFactory: async () => DATA_SOURCE,
    }
]