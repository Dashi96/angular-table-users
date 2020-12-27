import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, selectTerm: any): any {
    return value.filter(function(select: any) {
      return !select.gender.indexOf(selectTerm) || select.department.indexOf(selectTerm) > -1 || select.address.city.indexOf(selectTerm) > -1
    })
  }

}

