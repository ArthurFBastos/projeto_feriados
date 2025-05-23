import { Module } from '@nestjs/common';
import { FeriadoController } from '../controllers/feriados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriadoModel } from '../models/feriados.model';

@Module({
  imports: [],
  controllers: [FeriadoController]
})
export class FeriadoModule {}
