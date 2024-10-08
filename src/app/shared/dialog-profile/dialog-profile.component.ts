import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Profile } from '../../interfaces/profile';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog-profile',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './dialog-profile.component.html',
  styleUrl: './dialog-profile.component.scss'
})
export class DialogProfileComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {profile: Profile}) {}

  
  ngOnInit(): void {
    console.log(this.data.profile);
  }
}
