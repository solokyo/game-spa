import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';
import { Gear } from '../shared/types/gear';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gear-picker-dialog',
  templateUrl: './gear-picker-dialog.component.html',
  styleUrls: ['./gear-picker-dialog.component.css']
})
export class GearPickerDialogComponent implements OnInit, OnDestroy {
  selectedBrand: any;
  filtedGears: Array<Gear>
  gearsSubscription: Subscription;
  gears: Array<Gear>
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
  ) { 
    this.gearsSubscription = this.dataService.getStable('gears','/assets/gears.json').subscribe(data=>{
      this.gears = data;
    })
  }

  ngOnInit(): void {
    console.log(this.data);
  }
  nextStep(brand: any, gearType: string): void {
    
    this.selectedBrand = brand;
    this.filtedGears = this.gears.filter(gear=>{
      return gear.brand === brand.name && gear.type === gearType;
    });
  }
  ngOnDestroy(): void {
    this.gearsSubscription.unsubscribe();
  }
}
