import { Controller, Post, Get, Delete, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeriadoModel } from 'src/models/feriados.model';
import { Repository } from 'typeorm';

@Controller('feriados')
export class FeriadoController {
  constructor() {}
  //@InjectRepository(FeriadoModel) private model: Repository<FeriadoModel>
  @Post()
  public create(): any {
    return {
      message: 'Feriado criado com sucesso',
    };
  }

  // @Get()
  // public async getAll(): Promise<{ data: FeriadoModel[] }> {
  //   const list = await this.model.find();
  //   return {
  //     data: list,
  //   };
  // }

  @Get(':id')
  public getOne(): any {
    return {
      message: 'Feriado encontrado com sucesso',
    };
  }

  @Put(':id')
  public update(): any {
    return {
      message: 'Feriado atualizado com sucesso',
    };
  }

  @Delete(':id')
  public delete(): any {
    return {
      message: 'Feriado deletado com sucesso',
    };
  }
}