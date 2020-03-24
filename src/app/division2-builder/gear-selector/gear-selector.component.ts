import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component'

import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';
import { StatService } from '../shared/stat.service'
import { Gear } from '../shared/types/gear';
import { GearPickerDialogComponent } from '../gear-picker-dialog/gear-picker-dialog.component';
@Component({
  selector: 'd2b-gear-selector',
  templateUrl: './gear-selector.component.html',
  styleUrls: ['./gear-selector.component.css']
})
export class GearSelectorComponent implements OnInit {
  gearSlots: Array<any>;
  gears: Array<Gear>;
  brands: Array<any>;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
    this.dataService.getStable('gearSlots', '/assets/data.json').subscribe(data => {
      this.gearSlots = data;
      this.gears = new Array<Gear>(this.gearSlots.length);
    });

    this.dataService.getStable('gearSetBonus', '/assets/gear-set-bonus.json').subscribe(data => {
      this.brands = data;
    });
  }

  ngOnInit(): void {
  }

  selectBrand(slotType:string){
    const dialogRef = this.dialog.open(GearPickerDialogComponent, {
      data: { brands:this.brands, type: slotType}
    });

    dialogRef.afterClosed().subscribe((brand: any) => {

    });
  }
}
