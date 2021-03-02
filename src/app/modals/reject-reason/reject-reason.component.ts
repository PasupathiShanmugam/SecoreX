import { Component, OnInit, Inject } from '@angular/core';
import { IdCardApprovalComponent } from 'src/app/components/id-card-approval/id-card-approval.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reject-reason',
  templateUrl: './reject-reason.component.html',
  styleUrls: ['./reject-reason.component.css']
})
export class RejectReasonComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IdCardApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}