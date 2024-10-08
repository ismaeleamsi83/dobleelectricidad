import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatefilterPipe } from '../../pipes/datefilter.pipe';

export interface PeriodicElement {
  position: number;
  nombreTitular: string;
  correoElectronico: string;
  fechaDeAlta: Date;
  direccionDeEnvio: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombreTitular: 'Juan Pérez', correoElectronico: 'juan.perez@example.com', fechaDeAlta: new Date('2023-01-15'), direccionDeEnvio: 'Calle Falsa 123'},
  {position: 2, nombreTitular: 'María Gómez', correoElectronico: 'maria.gomez@example.com', fechaDeAlta: new Date('2023-02-10'), direccionDeEnvio: 'Avenida Siempre Viva 456'},
  {position: 3, nombreTitular: 'Carlos López', correoElectronico: 'carlos.lopez@example.com', fechaDeAlta: new Date('2023-03-05'), direccionDeEnvio: 'Calle del Sol 789'},
  {position: 4, nombreTitular: 'Ana Martínez', correoElectronico: 'ana.martinez@example.com', fechaDeAlta: new Date('2023-04-20'), direccionDeEnvio: 'Avenida del Mar 321'},
  {position: 5, nombreTitular: 'Luis Fernández', correoElectronico: 'luis.fernandez@example.com', fechaDeAlta: new Date('2023-05-18'), direccionDeEnvio: 'Calle Luna 654'},
  {position: 6, nombreTitular: 'Laura Sánchez', correoElectronico: 'laura.sanchez@example.com', fechaDeAlta: new Date('2023-06-12'), direccionDeEnvio: 'Calle Estrella 987'},
  {position: 7, nombreTitular: 'Jorge Ramírez', correoElectronico: 'jorge.ramirez@example.com', fechaDeAlta: new Date('2023-07-07'), direccionDeEnvio: 'Avenida del Norte 246'},
  {position: 8, nombreTitular: 'Sofía Herrera', correoElectronico: 'sofia.herrera@example.com', fechaDeAlta: new Date('2023-08-25'), direccionDeEnvio: 'Calle Sur 135'},
  {position: 9, nombreTitular: 'David Castillo', correoElectronico: 'david.castillo@example.com', fechaDeAlta: new Date('2023-09-11'), direccionDeEnvio: 'Avenida Central 864'},
  {position: 10, nombreTitular: 'Lucía Ortega', correoElectronico: 'lucia.ortega@example.com', fechaDeAlta: new Date('2023-10-03'), direccionDeEnvio: 'Calle Libertad 753'},
  {position: 11, nombreTitular: 'Diego Torres', correoElectronico: 'diego.torres@example.com', fechaDeAlta: new Date('2023-10-15'), direccionDeEnvio: 'Avenida Paz 147'},
  {position: 12, nombreTitular: 'Carmen Reyes', correoElectronico: 'carmen.reyes@example.com', fechaDeAlta: new Date('2023-11-01'), direccionDeEnvio: 'Calle Esperanza 258'},
  {position: 13, nombreTitular: 'Roberto Morales', correoElectronico: 'roberto.morales@example.com', fechaDeAlta: new Date('2023-11-20'), direccionDeEnvio: 'Avenida Libertador 369'},
  {position: 14, nombreTitular: 'Isabel Romero', correoElectronico: 'isabel.romero@example.com', fechaDeAlta: new Date('2023-12-08'), direccionDeEnvio: 'Calle Independencia 987'},
  {position: 15, nombreTitular: 'Andrés Gutiérrez', correoElectronico: 'andres.gutierrez@example.com', fechaDeAlta: new Date('2023-12-22'), direccionDeEnvio: 'Avenida Los Andes 741'},
  {position: 16, nombreTitular: 'Marta Vargas', correoElectronico: 'marta.vargas@example.com', fechaDeAlta: new Date('2024-01-10'), direccionDeEnvio: 'Calle del Río 963'},
  {position: 17, nombreTitular: 'Pablo Ruiz', correoElectronico: 'pablo.ruiz@example.com', fechaDeAlta: new Date('2024-01-25'), direccionDeEnvio: 'Avenida Colón 852'},
  {position: 18, nombreTitular: 'Elena Rojas', correoElectronico: 'elena.rojas@example.com', fechaDeAlta: new Date('2024-02-14'), direccionDeEnvio: 'Calle Victoria 741'},
  {position: 19, nombreTitular: 'Raúl Medina', correoElectronico: 'raul.medina@example.com', fechaDeAlta: new Date('2024-03-01'), direccionDeEnvio: 'Avenida América 654'},
  {position: 20, nombreTitular: 'Gloria Ortiz', correoElectronico: 'gloria.ortiz@example.com', fechaDeAlta: new Date('2024-03-19'), direccionDeEnvio: 'Calle Central 963'},
];



@Component({
  selector: 'app-profilequery',
  standalone: true,
  imports: [MatPaginator, MatPaginatorModule, MatSort, MatSortModule,
     MatTableModule, MatInputModule, MatFormFieldModule, DatefilterPipe
  ],
  templateUrl: './profilequery.component.html',
  styleUrl: './profilequery.component.scss'
})
export class ProfilequeryComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'nombreTitular', 'correoElectronico', 'fechaDeAlta', 'direccionDeEnvio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
