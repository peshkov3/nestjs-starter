import { Module } from '@nestjs/common';
import { CityModule } from './modules/city/city.module';
import { CountryModule } from './modules/country/country.module';
import { SnakeNamingStrategy } from './core/snake.naming.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionModule } from './modules/regions/region.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.99.100',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    CountryModule,
    RegionModule,
    CityModule,
  ],
})
export class AppModule {}
