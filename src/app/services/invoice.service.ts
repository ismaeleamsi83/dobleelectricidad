
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

// Emulo los datos que recibiria del backend que tendria que venir mediante httpclient mediante un get
// Pero al no tener backend lo emulo asi
const ELEMENT_DATA: Invoice[] = [
  { position: 1, nombre: 'Factura de Electricidad', fecha: new Date(2023, 0, 15), importe: 100.50, direccion: 'Calle 123, Ciudad A', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 2, nombre: 'Factura de Agua', fecha: new Date(2023, 1, 20), importe: 35.75, direccion: 'Avenida 456, Ciudad B', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 3, nombre: 'Factura de Internet', fecha: new Date(2023, 2, 10), importe: 60.00, direccion: 'Calle 789, Ciudad C', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 4, nombre: 'Factura de Gas', fecha: new Date(2023, 3, 5), importe: 45.25, direccion: 'Calle 101, Ciudad D', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 5, nombre: 'Factura de Teléfono', fecha: new Date(2023, 4, 15), importe: 25.50, direccion: 'Calle 202, Ciudad E', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 6, nombre: 'Factura de TV por Cable', fecha: new Date(2023, 5, 12), importe: 50.80, direccion: 'Avenida 303, Ciudad F', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 7, nombre: 'Factura de Luz', fecha: new Date(2023, 6, 8), importe: 110.30, direccion: 'Calle 404, Ciudad G', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 8, nombre: 'Factura de Agua', fecha: new Date(2023, 7, 22), importe: 33.25, direccion: 'Avenida 505, Ciudad H', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 9, nombre: 'Factura de Internet', fecha: new Date(2023, 8, 18), importe: 65.00, direccion: 'Calle 606, Ciudad I', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 10, nombre: 'Factura de Gas', fecha: new Date(2023, 9, 3), importe: 47.90, direccion: 'Avenida 707, Ciudad J', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 11, nombre: 'Factura de Teléfono', fecha: new Date(2023, 10, 10), importe: 30.75, direccion: 'Calle 808, Ciudad K', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 12, nombre: 'Factura de Electricidad', fecha: new Date(2023, 11, 25), importe: 120.00, direccion: 'Avenida 909, Ciudad L', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 13, nombre: 'Factura de Luz', fecha: new Date(2024, 0, 7), importe: 105.45, direccion: 'Calle 1010, Ciudad M', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 14, nombre: 'Factura de Agua', fecha: new Date(2024, 1, 15), importe: 39.99, direccion: 'Avenida 111, Ciudad N', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 15, nombre: 'Factura de Internet', fecha: new Date(2024, 2, 20), importe: 68.50, direccion: 'Calle 222, Ciudad O', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 16, nombre: 'Factura de Gas', fecha: new Date(2024, 3, 5), importe: 55.30, direccion: 'Avenida 333, Ciudad P', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 17, nombre: 'Factura de Teléfono', fecha: new Date(2024, 4, 19), importe: 27.40, direccion: 'Calle 444, Ciudad Q', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 18, nombre: 'Factura de TV por Cable', fecha: new Date(2024, 5, 8), importe: 59.99, direccion: 'Avenida 555, Ciudad R', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 19, nombre: 'Factura de Luz', fecha: new Date(2024, 6, 14), importe: 99.10, direccion: 'Calle 666, Ciudad S', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
  { position: 20, nombre: 'Factura de Agua', fecha: new Date(2024, 7, 29), importe: 44.70, direccion: 'Avenida 777, Ciudad T', pdfUrl: '../../../assets/pdfs/ejemplo-endesa.pdf' },
];


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  
  // Los datos lo guardo de esta manera para que lo pueda manipular la tabla con Angular Material
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private http: HttpClient
  ) { }

  // El metodo que devuelve los datos 
  getInvoice(){
    return this.dataSource;
  }

}
