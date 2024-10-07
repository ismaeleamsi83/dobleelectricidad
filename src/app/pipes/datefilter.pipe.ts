import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter',
  standalone: true
})
export class DatefilterPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    if (value == null) {
      return '';
    }else{
      const valorNuevo = `${value.getDate()}-${value.getMonth()+1}-${value.getFullYear()}`;
      return valorNuevo;
    }
  }

}
