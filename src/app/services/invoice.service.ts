
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

const ELEMENT_DATA: Invoice[] = [
  { position: 1, nombre: 'Factura de Electricidad', fecha: new Date(2023, 0, 15), importe: 100.50, direccion: 'Calle 123, Ciudad A', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 2, nombre: 'Factura de Agua', fecha: new Date(2023, 1, 20), importe: 35.75, direccion: 'Avenida 456, Ciudad B', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 3, nombre: 'Factura de Internet', fecha: new Date(2023, 2, 10), importe: 60.00, direccion: 'Calle 789, Ciudad C', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 4, nombre: 'Factura de Gas', fecha: new Date(2023, 3, 5), importe: 45.25, direccion: 'Calle 101, Ciudad D', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 5, nombre: 'Factura de Teléfono', fecha: new Date(2023, 4, 15), importe: 25.50, direccion: 'Calle 202, Ciudad E', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
];

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private http: HttpClient
  ) { }

  getInvoice(){
    return this.dataSource;
  }

}
