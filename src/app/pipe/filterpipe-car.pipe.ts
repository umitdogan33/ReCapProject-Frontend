import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Cars/car';
import { CarDetail } from '../models/Cars/carDetail';

@Pipe({
  name: 'filterpipeCar'
})
export class FilterpipeCarPipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText= filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((p:CarDetail)=> p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value

  }

}
