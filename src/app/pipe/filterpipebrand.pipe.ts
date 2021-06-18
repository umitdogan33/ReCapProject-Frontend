import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Brand/brand';

@Pipe({
  name: 'filterpipebrand'
})
export class FilterpipebrandPipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText= filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((p:Brand)=> p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value

  }

}
