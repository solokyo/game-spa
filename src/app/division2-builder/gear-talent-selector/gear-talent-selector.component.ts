import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';
import { MatDialog } from '@angular/material/dialog';
import { UtilService } from '../shared/util.service';
import { DataService } from '../shared/data.service';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';

@Component({
  selector: 'd2b-gear-talent-selector',
  templateUrl: './gear-talent-selector.component.html',
  styleUrls: ['./gear-talent-selector.component.css']
})
export class GearTalentSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  gearTalents: Array<any>;
  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) { 
    this.dataService.getStable('gearTalents','/assets/gear-talents.json').subscribe(data => {
      this.gearTalents = data;
    })
  }

  ngOnInit(): void {
  }
  
  selectGearMod(avaliableMod: any): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '1080px',
      data: {
        key: 'gearMod', value: this.gearTalents.filter(talent => {
          return avaliableMod.slot === talent.slot && talent.availableOn.includes(avaliableMod.type);
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
