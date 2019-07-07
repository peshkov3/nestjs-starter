import {Connection} from 'typeorm';
import {Factory, Seeder} from 'typeorm-seeding';
import {Country} from '../../modules/country/country.entity';

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
        const countries = require('./dumps/COUNTRIES_201905081635').COUNTRIES.map(toLowerCase).map(c => {
            if (!c.currency) {
                c.currency = 'NULL';
            }
            if (!c.phone_code_prefix) {
                c.phone_code_prefix = 'NULL';
            }
            if (!c.nationality) {
                c.nationality = 'NULL';
            }
            return c;
        });
        await connection
            .createQueryBuilder()
            .insert()
            .into(Country)
            .values(countries)
            .execute();
    }
}
