import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  selectedGears: Array<Gear> = new Array<Gear>(6);
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
    this.dataService.getStable('gearSlots', '/assets/data.json').subscribe(data => {
      this.gearSlots = data;
      this.selectedGears = new Array<Gear>(this.gearSlots.length);
    });

    this.dataService.getStable('gearSetBonus', '/assets/gear-set-bonus.json').subscribe(data => {
      this.brands = data;
    });
  }

  ngOnInit(): void {
  }

  selectBrand(slotType: string, index: number) {
    const dialogRef = this.dialog.open(GearPickerDialogComponent, {
      data: { brands: this.brands, type: slotType }
    });

    dialogRef.afterClosed().subscribe((gear: any) => {
      console.log(gear);
      this.selectedGears[index] = {...gear};
    });
  }
}
