import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {

    if(!list){
      return[];
    }

    if(!filterText){
      return list;
    }

    filterText = filterText.toLocaleLowerCase();

    return list ? list.filter(item => item.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
