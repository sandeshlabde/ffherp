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
      console.log(joinDate);
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
