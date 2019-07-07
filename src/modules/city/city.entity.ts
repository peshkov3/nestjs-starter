import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { Country } from '../country/country.entity';
import { Region } from '../regions/region.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name_ru: string;

  @Column()
  name_en: string;

  @Column({ nullable: true })
  name_ro?: string;

  @Column({ nullable: true ,  type: 'real' })
  latitude?: number;

  @Column({ nullable: true,  type: 'real' })
  longitude?: number;

  @Column({ nullable: true })
  timezone?: string;

  @ManyToOne(type => Region, region => region.cities)
  @JoinColumn()
  region?: Region;

  @ManyToOne(type => Country, country => country.cities)
  @JoinColumn()
  country?: Country;
}
