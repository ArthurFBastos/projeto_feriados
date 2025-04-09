import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: DataSourceOptions = {
  type: 'postgres',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  entities: [__dirname, '..', '**', '*.model.{ts,js}'],
};

export const typeOrmConfig = async (): Promise<TypeOrmModuleOptions> => options;

export const AppDataSource = new DataSource(options);