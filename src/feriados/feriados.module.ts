import { Module } from '@nestjs/common';
import { FeriadosService } from './feriados.service';
import { FeriadosController } from './feriados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feriado } from './feriados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feriado])],
  providers: [FeriadosService],
  controllers: [FeriadosController]
})
export class FeriadosModule {}
