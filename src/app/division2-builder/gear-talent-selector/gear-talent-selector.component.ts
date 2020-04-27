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
  isTalentSelectable : boolean;
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
    this.isTalentSelectable = this.gear.type === 'Chest' || this.gear.type === 'Backpack';
  }
  
  selectGearTalent(gear: any): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '720px',
      data: {key:'weaponTalent',value: this.gearTalents.filter(talent=>{
        for (let i = 0; i < talent.availableOn.length; i++) {
          if (talent.availableOn[i] === this.gear.type) {
              return true;
          }
        }
        return false;
      })}
    });

    dialogRef.afterClosed().subscribe(talent => {
      console.log(talent);
      if (talent) {
        this.utilService.updateOrPush(this.gear.mod, talent, 'slot');
        this.updated.emit(talent);
      }
    });
  }
}
