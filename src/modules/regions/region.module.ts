import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionService } from './region.service';
import { Region } from './region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Region])],
  providers: [RegionService],
  exports: [RegionService],
})
export class RegionModule {}
