import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatefilterPipe } from '../../pipes/datefilter.pipe';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogProfileComponent } from '../../shared/dialog-profile/dialog-profile.component';



@Component({
  selector: 'app-profilequery',
  standalone: true,
  imports: [MatPaginator, MatPaginatorModule, MatSort, MatSortModule,
     MatTableModule, MatInputModule, MatFormFieldModule, DatefilterPipe,
     MatButtonModule, MatDialogModule
  ],
  templateUrl: './profilequery.component.html',
  styleUrl: './profilequery.component.scss'
})
export class ProfilequeryComponent implements AfterViewInit {

  // Se crea para mostrar los campos es decir las columnas que va a tener la tabla para mostrar los datos
  displayedColumns: string[] = ['position', 'nombreTitular', 'correoElectronico', 'fechaDeAlta', 'direccionDeEnvio', 'editar'];
  
  // Se guarda los datos que recibo del servicio
  dataSource:any;

  // Manipula el DOM de paginacion y ordenacion de la tabla de material angular
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  // para poder usar el servicio profile y poder llamar al dialog
  // debajo guardo los datos recibidos del servicio
  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ){
    this.dataSource = this.profileService.getProfile();
  }

  // Despues de cargar el componente se carga las opciones de paginacion y ordenar de la tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // llamo al dialog para que me lo muestre cuando le doy en la tabla Edit
  editProfile(profile: Profile){
    this.openDialog(profile);
  }

  // Aquí muestro el componente diagloprofilecomponent que le envio los datos de 
  // solo la persona seleccionada y si recibo una modificacion lo actualizo en el servicio
  openDialog(profile: Profile) {
    const dialogRef = this.dialog.open(DialogProfileComponent,{
      data: {profile}
    });

    dialogRef.afterClosed().subscribe((result: Profile | boolean | undefined) => {
      
      if(!(result == false || result == undefined)){
        const profile = result as Profile;
        this.profileService.updateProfileforId(profile);
      }
    });
  }

}
