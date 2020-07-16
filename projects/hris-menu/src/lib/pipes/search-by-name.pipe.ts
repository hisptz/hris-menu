import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(lookup: any[], name: any, ...args: any[]): any {
    const splittedName = name ? _.compact(_.split(name, /[\.\-_,; ]/)) : [];

    return splittedName.length > 0 && lookup
      ? _.filter(lookup, (item: any) =>
          _.some(
            splittedName,
            (nameString: string) =>
              item.name.toLowerCase().indexOf(nameString.toLowerCase()) !== -1
          )
        )
      : lookup;
  }
}
