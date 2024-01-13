import { DataSourceOptions } from 'typeorm';

import { dataSource as postgres } from './postgres.config';

export const dataSources: { [key: string]: (entities: DataSourceOptions['entities']) => DataSourceOptions } = {
  postgres,
};