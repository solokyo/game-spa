import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from '../shared/types/weapon';
import { WeaponMod } from '../shared/types/weapon-mod';
import { DataService } from '../shared/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'd2b-weapon-mod-selector',
  templateUrl: './weapon-mod-selector.component.html',
  styleUrls: ['./weapon-mod-selector.component.css']
})
export class WeaponModSelectorComponent implements OnInit {
  @Input() weapon: Weapon;
  @Output() updated = new EventEmitter<boolean>();
  weaponMods: Array<WeaponMod>;
  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) {
    this.dataService.getStable('weaponMods', '/assets/weapon-mods.json').subscribe(data => {
      this.weaponMods = data;
    });
  }

  ngOnInit(): void { console.log(this.weapon); }

  selectWeaponMod(avaliableMod: any): void {
    console.log(this.weapon);

    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '1080px',
      data: {
        key: 'weaponMod', value: this.weaponMods.filter(mod => {
          return avaliableMod.slot === mod.slot && mod.availableOn.includes(avaliableMod.type);
        })
      }
    });

    dialogRef.afterClosed().subscribe(mod => {
      console.log(mod);
      if (mod) {
        this.utilService.updateOrPush(this.weapon.mods, mod, 'slot');
        this.updated.emit(mod);
      }
      console.log(this.weapon);
    });
  }

  isSelected(avaliableMod: { slot: string, type: string }) {
    let index = this.weapon.mods.findIndex(mod => { return mod.slot === avaliableMod.slot });
    return index === -1 ? null : this.weapon.mods[index];
  }
}
