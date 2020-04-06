import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';
import { UtilService } from '../shared/util.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-gear-attribute-selector',
  templateUrl: './gear-attribute-selector.component.html',
  styleUrls: ['./gear-attribute-selector.component.css']
})
export class GearAttributeSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  gearAttributes: Array<any>;
  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  selectWeaponMod(avaliableMod: any): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '1080px',
      data: {
        key: 'gearMod', value: this.gearAttributes.filter(mod => {
          return avaliableMod.slot === mod.slot && mod.availableOn.includes(avaliableMod.type);
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
