import {SnakeNamingStrategy} from './src/core/snake.naming.strategy';

module.exports = {
    type: 'postgres',
    host: '192.168.99.100',
    port: 5432,
    username: 'postgres',
    password: 'changeme',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    seeds: ['/**/*.seed.ts'],
    synchronize: true,
    dropSchema: true,
    // logging: true,
    namingStrategy: new SnakeNamingStrategy(),
};