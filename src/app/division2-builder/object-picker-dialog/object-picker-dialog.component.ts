import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeaponSelectorComponent } from '../weapon-selector/weapon-selector.component'

@Component({
  selector: 'app-object-picker-dialog',
  templateUrl: './object-picker-dialog.component.html',
  styleUrls: ['./object-picker-dialog.component.css']
})
export class ObjectPickerDialogComponent implements OnInit {
  @Input()selectedBrand: any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: { key: string, value: { [propName: string]: any[]; } }

  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  set(brand: any): void {
    this.selectedBrand = brand;
  }
}
