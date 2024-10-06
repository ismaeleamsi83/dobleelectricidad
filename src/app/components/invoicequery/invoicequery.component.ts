import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface Factura {
  position: number;  // Esto puede ser útil para identificar cada fila
  nombre: string;
  fecha: Date;
  importe: number;
  direccion: string;
}

const ELEMENT_DATA: Factura[] = [
  { position: 1, nombre: 'Factura de Electricidad', fecha: new Date(2023, 0, 15), importe: 100.50, direccion: 'Calle 123, Ciudad A' },
  { position: 2, nombre: 'Factura de Agua', fecha: new Date(2023, 1, 20), importe: 35.75, direccion: 'Avenida 456, Ciudad B' },
  { position: 3, nombre: 'Factura de Internet', fecha: new Date(2023, 2, 10), importe: 60.00, direccion: 'Calle 789, Ciudad C' },
  { position: 4, nombre: 'Factura de Gas', fecha: new Date(2023, 3, 5), importe: 45.25, direccion: 'Calle 101, Ciudad D' },
  { position: 5, nombre: 'Factura de Teléfono', fecha: new Date(2023, 4, 15), importe: 25.50, direccion: 'Calle 202, Ciudad E' },
];

@Component({
  selector: 'app-invoicequery',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './invoicequery.component.html',
  styleUrl: './invoicequery.component.scss'
})
export class InvoicequeryComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['position', 'nombre', 'fecha', 'importe', 'direccion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}