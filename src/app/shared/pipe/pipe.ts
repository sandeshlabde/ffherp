import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateformat',
})
export class TablePipe implements PipeTransform {
  transform(value: any): any {
    if (value == null) {
      // console.log(value);
      return value;
    } else {
      let Value = value.split('/');
      let format = Value.reverse();
      let joinDate = format.join('-');

      const formatValue = moment(joinDate).format('DD MMM y');
      return formatValue;
    }
  }
}
// @Pipe({
//   name: 'opentDateFormat',
// })
// export class opentDateFormat implements PipeTransform {
//   transform(value: any): any {
//     if (value == null) {
//       // console.log(value);
//       return value;
//     } else {
//       let Value = value.split('/');
//       let format = Value.reverse();
//       let joinDate = format.join('-');
//       console.log(joinDate);
//       const formatValue = moment(joinDate).format('DD MMM y');
//       return formatValue;
//     }
//   }
// }
@Pipe({
  name: 'Filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any): any {
    console.log(value);
    return value;
  }
}
@Pipe({
  name: 'formFilter',
})
export class FormFilter implements PipeTransform {
  transform(list: any, type: any): any {
    return list.filter((item: any) => item.Category == type);
  }
}
@Pipe({
  name: 'commanFilter',
})
export class CommanFilter implements PipeTransform {
  transform(list: any, type: any): any {
    if (list != null) {
      return list.filter((item: any) => item.Type == type);
    }
  }
}
