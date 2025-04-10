import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriadoModule } from './modules/feriados.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';    

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
          TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5434,
            username: 'postgres',
            password: 'postgres',
            database: 'feriadosDB',
            synchronize: true,
            logging: true,
            entities: [join(__dirname, '..', '**', '*.model.{ts,js}')],
          }),
          
        FeriadoModule,
    ],
})
export class AppModule {}