import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { DataService } from "../shared/data.service";
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';
import { WeaponTalent } from '../shared/types/weapon-talent';
import { Weapon } from '../shared/types/weapon';
@Component({
  selector: "d2b-weapon-talent-selector",
  templateUrl: "./weapon-talent-selector.component.html",
  styleUrls: ["./weapon-talent-selector.component.css"]
})
export class WeaponTalentSelectorComponent implements OnInit {
  @Input() weapon;
  @Input() isTalentSelectable;
  @Output() updated = new EventEmitter<boolean>();
  weaponTalents: Array<WeaponTalent>;
  selectable:boolean;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    
    this.dataService.getStable("weaponTalents", "/assets/weapon-talents.json").subscribe(data => {
        this.weaponTalents = data;
    });
  }

  ngOnInit() { }

  selectWeaponTalent():void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '720px',
      data: {key:'weaponTalent',value: this.weaponTalents.filter(talent=>{
        for (let i = 0; i < talent.availableOn.length; i++) {
          if (talent.availableOn[i] === this.weapon.type.name) {
              return true;
          }
        }
        return false;
      })}
    });

    dialogRef.afterClosed().subscribe(talent => {
      console.log(talent);
      if (talent) {
        this.weapon.talent = talent;
        this.updated.emit(talent);
      }
    });
  }
}
