import { Component, OnInit, Inject } from '@angular/core';
import { IdCardApprovalComponent } from 'src/app/components/id-card-approval/id-card-approval.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-photo',
  templateUrl: './employee-photo.component.html',
  styleUrls: ['./employee-photo.component.css']
})
export class EmployeePhotoComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<IdCardApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
