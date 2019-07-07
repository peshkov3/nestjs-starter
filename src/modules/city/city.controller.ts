import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { City } from './city.entity';
import { CityService } from './city.service';

@Crud({
  model: {
    type: City,
  },
})
@Controller('cities')
export class CityController implements CrudController<City> {
  constructor(public service: CityService) {}
}
