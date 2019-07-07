import {Connection} from 'typeorm';
import {Factory, Seeder} from 'typeorm-seeding';
import {City} from '../../modules/city/city.entity';
import {chunk} from 'lodash';

const toLowerCase = (item) => {
    for (const key in item) {
        if (item.hasOwnProperty(key)) {
            const upper = key.toLowerCase();
            // check if it already wasn't uppercase
            if (upper !== key) {
                item[upper] = item[key];
                delete item[key];
            }
        }
    }
    return item;
};
export default class CreateCountries implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const cities = require('./dumps/CITIES_201905081635').CITIES.map(toLowerCase).map(c => {
            return c;
        });
        const chunks = chunk(cities, 2000);
        for (const chunkToInsert of chunks) {
            await connection
                .createQueryBuilder()
                .insert()
                .into(City)
                .values(chunkToInsert)
                .execute();
        }

    }
}
