import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {City} from '../city/city.entity';

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn() id?: number;

    @Column()
    name_ru: string;

    @Column()
    name_en: string;

    @Column({nullable: true})
    name_de?: string;

    @Column({nullable: true})
    name_es?: string;

    @Column({nullable: true})
    name_fr?: string;

    @Column({nullable: true})
    name_ja?: string;

    @Column({nullable: true})
    native_name?: string;

    @Column()
    alpha2_code: string;

    @Column({nullable: true})
    alpha3_code?: string;

    @Column({nullable: true})
    flag?: string;

    @Column()
    region: string;

    @Column()
    subregion: string;

    @Column()
    nationality: string;

    @Column()
    phone_code_prefix?: string;

    @Column()
    currency: string;

    @Column({nullable: true})
    lang?: string;

    @ManyToOne(type => City)
    @JoinColumn()
    capital?: Country;

    @OneToMany(type => City, city => city.country)
    cities: City[];
}
