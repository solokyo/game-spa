import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';
import { MatDialog } from '@angular/material/dialog';
import { UtilService } from '../shared/util.service';
import { DataService } from '../shared/data.service';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';

@Component({
  selector: 'd2b-gear-mod-selector',
  templateUrl: './gear-mod-selector.component.html',
  styleUrls: ['./gear-mod-selector.component.css']
})
export class GearModSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  gearModRolls: Array<any>;
  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) {
    this.dataService.getStable('gearModRolls', '/assets/gear-mod-rolls.json').subscribe(data => {
      this.gearModRolls = data;
    })
  }

  ngOnInit(): void {
  }
  selectGearMod(): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '1080px',
      data: {
        key: 'gearMod', value: this.gearModRolls.filter(roll =>{
          return roll.category === this.gear;
        })
      }
    });

    dialogRef.afterClosed().subscribe(mod => {
      console.log(mod);
      if (mod) {
        this.utilService.updateOrPush(this.gear.mod, mod, 'slot');
        this.updated.emit(mod);
      }
    });
  }
}
