import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../shared/types/weapon';
import { WeaponMod } from '../shared/types/weapon-mod';
import { DataService } from '../shared/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';

@Component({
  selector: 'd2b-weapon-mod-selector',
  templateUrl: './weapon-mod-selector.component.html',
  styleUrls: ['./weapon-mod-selector.component.css']
})
export class WeaponModSelectorComponent implements OnInit {
  @Input() weapon: Weapon;
  weaponMods: Array<WeaponMod>;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    this.dataService.getStable('weaponMods', '/assets/weapon-mods.json').subscribe(data => {
      this.weaponMods = data;
    });
  }

  ngOnInit(): void {
  }

  selectWeaponMod(avaliableMod: any): void {
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
        this.weapon.mods.push(mod);
      }
      console.log(this.weapon);
    });
  }

}
