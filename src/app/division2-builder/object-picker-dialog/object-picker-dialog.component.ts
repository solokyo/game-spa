import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-object-picker-dialog',
  templateUrl: './object-picker-dialog.component.html',
  styleUrls: ['./object-picker-dialog.component.css']
})
export class ObjectPickerDialogComponent implements OnInit {
  selectedBrand: any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: { key: string, value: any }

  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
}
