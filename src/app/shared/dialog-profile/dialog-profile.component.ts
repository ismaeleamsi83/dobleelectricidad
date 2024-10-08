
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Profile } from '../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatefilterPipe } from '../../pipes/datefilter.pipe';


@Component({
  selector: 'app-dialog-profile',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dialog-profile.component.html',
  styleUrl: './dialog-profile.component.scss'
})

export class DialogProfileComponent implements OnInit {

  // updateProfile: Profile;

  profileForm: FormGroup; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: {profile: Profile},
  private fb: FormBuilder  ) {
    // this.updateProfile = data.profile;
    this.profileForm = this.fb.group({
      nombreTitular: [this.data.profile.nombreTitular],
      correoElectronico: [this.data.profile.correoElectronico],
      fechaDeAlta: [this.formatDate(this.data.profile.fechaDeAlta)],
      direccionDeEnvio: [this.data.profile.direccionDeEnvio]
    });
  }

  ngOnInit(): void {
    console.log(this.data.profile);
    
  }

  formatDate(date: Date){
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const fullDate = `${year}-${month}-${day}`
    console.log(fullDate);
    return fullDate;
  }
}
