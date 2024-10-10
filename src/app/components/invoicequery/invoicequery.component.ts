import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { InvoiceService } from '../../services/invoice.service';
import { DatefilterPipe } from '../../pipes/datefilter.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-invoicequery',
  standalone: true,
  imports: [MatTableModule, MatSortModule, DatefilterPipe, MatPaginatorModule],
  templateUrl: './invoicequery.component.html',
  styleUrl: './invoicequery.component.scss'
})
export class InvoicequeryComponent implements OnInit, AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  // Se declara los nombres de los campos de la tabla que va a contener los datos en el html
  displayedColumns: string[] = ['position', 'nombre', 'fecha', 'importe', 'direccion', 'pdf'];
  
  // Aqui se guarda los datos que recibo del servicio que voy a mostrar en la tabla
  dataSource:any;

  // Capturo mediante el DOM el filtro de ordenar y paginar la tabla
  // Le pongo admiracion para que no de error si no esta inicializado en el constructor..
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Para poder usar el servicio 
  constructor(
    private _invoiceService: InvoiceService
  ){}

  // Guardo los datos que recibo del servicio para mostrarlo en la tabla
  ngOnInit(): void {
    
    this.dataSource = this._invoiceService.getInvoice();
  }


  // Despues de que el componente haya cargado se carga las opciones de la tabla de poder ordenar los campos y poder paginar
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }


  // Es el metodo para poder ordenar las columnas de la tabla
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}