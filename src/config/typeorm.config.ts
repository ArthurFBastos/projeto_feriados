import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const options: DataSourceOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5434,
  username: "postgres",
  password: "postgres",
  database: "feriadosDB",
  synchronize: true,
  logging: true,
  entities: [join(__dirname, '..', '**', '*.model.ts')],};

export const typeOrmConfig = async (): Promise<TypeOrmModuleOptions> => options;

export const AppDataSource = new DataSource(options);