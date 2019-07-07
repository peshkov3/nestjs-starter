import * as request from 'supertest';
import {Test} from '@nestjs/testing';

import {INestApplication} from '@nestjs/common';
import {AppModule} from '../src/app.module';
import {getConnection, Repository} from 'typeorm';
import {Region} from '../src/modules/regions/region.entity';
import {Country} from '../src/modules/country/country.entity';

describe('Cities', () => {
    let app: INestApplication;
    let region: Region;
    let country: Country;
    let regionRepository: Repository<Region>;
    let countryRepository: Repository<Country>;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();
        regionRepository = getConnection().getRepository(Region);
        countryRepository = getConnection().getRepository(Country);

// example how to save DM entity
        region = new Region();
        region.name_en = 'Timber';
        region.name_ro = 'Saw';
        region.name_ru = 'Регион';
        await regionRepository.save(region);

        country = new Country();
        country.name_en = 'TimberCountry';
        country.name_ru = 'РегионCountry';
        country.alpha2_code = 'UK';
        country.region = 'REG';
        await regionRepository.save(region);


    });

    it(`/GET cities before all tests`, () => {
        return request(app.getHttpServer())
            .get('/cities')
            .expect(200)
            .expect([]);
    });
    it(`/POST before creating city - create region and country`, () => {
        return request(app.getHttpServer())
            .post('/regions')
            .send({name_en: 'SampleRegionEn', name_ru: 'SampleRegionRu'})
            .set('Accept', 'application/json')
            .expect(200)
            .expect([]);
    });
    afterAll(async () => {
        await app.close();
    });
});