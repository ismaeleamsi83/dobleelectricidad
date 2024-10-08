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

  displayedColumns: string[] = ['position', 'nombreTitular', 'correoElectronico', 'fechaDeAlta', 'direccionDeEnvio', 'editar'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ){
    this.dataSource = this.profileService.getProfile();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editProfile(profile: Profile){
    this.openDialog(profile);
  }

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
