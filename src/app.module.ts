import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriadoModule } from './modules/feriados.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './db/sqlite.db',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        FeriadoModule,
    ],
})
export class AppModule {}