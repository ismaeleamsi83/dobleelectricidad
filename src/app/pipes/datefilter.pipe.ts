import { Pipe, PipeTransform } from '@angular/core';
// Para mostrar solo los tres valores de la fecha 
@Pipe({
  name: 'datefilter',
  standalone: true
})
export class DatefilterPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) {
      return ''; // Si no hay valor, retorna una cadena vacía
    }

    // Si es una cadena de texto, convierte a Date
    if (typeof value === 'string') {
      value = new Date(value);
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      // Formatear la fecha si es válida
      const day = String(value.getDate()).padStart(2, '0');
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const year = value.getFullYear();
      return `${day}/${month}/${year}`;
    }

    return ''; // Si no es una fecha válida, retorna cadena vacía
  }

}
