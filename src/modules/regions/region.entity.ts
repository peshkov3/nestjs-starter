import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { City } from '../city/city.entity';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn() id?: number;
  @Column() name_en: string;
  @Column() name_ru: string;
  @Column() name_ro?: string;

  @OneToMany(type => City, city => city.region)
  cities: City[];
}
