
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Profile } from '../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

// Se importan los modulos que se van a utilizar en el componente
@Component({
  selector: 'app-dialog-profile',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dialog-profile.component.html',
  styleUrl: './dialog-profile.component.scss'
})

export class DialogProfileComponent implements OnInit {

  profileForm: FormGroup; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: {profile: Profile},
  private fb: FormBuilder  ) {
    // Asignar los los datos del perfil seleccionado en el profilequery que viene al dialog
    this.profileForm = this.fb.group({
      position: [this.data.profile.position],
      nombreTitular: [this.data.profile.nombreTitular],
      correoElectronico: [this.data.profile.correoElectronico],
      fechaDeAlta: [this.formatDate(new Date(this.data.profile.fechaDeAlta))],
      direccionDeEnvio: [this.data.profile.direccionDeEnvio]
    });
  }

  ngOnInit(): void {
  }

  // formatear la fecha a string con solo el dia, mes y año
  formatDate(date: any): string {
    if (typeof date === 'string') {
      // Si es una cadena, crear un objeto Date a partir de la cadena
      date = new Date(date);
    }
  
    if (date instanceof Date && !isNaN(date.getTime())) {
      // Solo formatear si es un objeto Date válido
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    } else {
      // Si no es un objeto Date válido, devolver una cadena vacía
      return '';
    }
  }
}
