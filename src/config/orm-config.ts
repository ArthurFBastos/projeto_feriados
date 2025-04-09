import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/sql',
  synchronize: true,
  logging: true, 
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
};