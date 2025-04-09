import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeriadoModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo_ibge: string;

  @Column({length: 255})
  nome: string;

  @Column('int')
  mes: number;

  @Column('int')
  dia: number;

  @Column('boolean', { default: false })
  feriado_movel: boolean;
}
