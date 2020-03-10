import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeaponSelectorComponent } from '../weapon-selector/weapon-selector.component'

@Component({
  selector: 'app-object-picker-dialog',
  templateUrl: './object-picker-dialog.component.html',
  styleUrls: ['./object-picker-dialog.component.css']
})
export class ObjectPickerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WeaponSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { [propName: string]: any[]; }

  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
