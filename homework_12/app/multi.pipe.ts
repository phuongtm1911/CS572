import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, n: number): any {
    var result: string = "";
    for (var i = 0; i < n; i++) {
      if (i === n - 1) {
        result += value.toString();
      } else {
        result += value.toString() + " ";
      }
    }
    return result;
  }

}
