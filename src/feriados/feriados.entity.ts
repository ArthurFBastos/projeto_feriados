import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feriado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo_ibge: string;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  mes: number;

  @Column({ nullable: true })
  dia: number;

  @Column({ nullable: true })
  feriado_movel: string;
}
