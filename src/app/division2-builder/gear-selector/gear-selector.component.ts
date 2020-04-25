import { Component, OnInit, Output, Input } from '@angular/core';
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
  @Input() slot: { slot: string, icon: string, bonus: [{ attribute: string, value: number }] };
  gears: Array<Gear>;
  brands: Array<any>;
  selectedGear: Gear;
  hasTalent: boolean;
  hasModSlot: boolean;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
    this.dataService.getStable('gearSetBonus', '/assets/gear-set-bonus.json').subscribe(data => {
      this.brands = data;
    });
  }

  ngOnInit(): void {
  }

  selectBrand(slotType: string) {
    const dialogRef = this.dialog.open(GearPickerDialogComponent, {
      data: { brands: this.brands, type: slotType }
    });

    dialogRef.afterClosed().subscribe((gear: any) => {
      if (gear) {
        let foo: Gear = { ...gear };
        foo.type = this.slot.slot;
        foo.bonus = this.slot.bonus;

        this.selectedGear = foo;
        this.hasModSlot = this.slot.slot === 'Chest' || this.slot.slot === 'Backpack' || this.slot.slot === 'Mask';
        this.hasTalent = this.slot.slot === 'Chest' || this.slot.slot === 'Backpack' || this.selectedGear.rarity === 'exotic';
        this.updateSelectedGear();
      }
    });
  }

  updateSelectedGear(): void {
    this.statService.updateEquippedGear(this.selectedGear);
  }
}
