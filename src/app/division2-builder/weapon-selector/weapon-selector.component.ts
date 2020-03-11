import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component'

import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service'
import { Weapon } from '../shared/types/weapon';
import { WeaponType } from '../shared/types/weapon-type';

@Component({
  selector: 'd2b-weapon-selector',
  templateUrl: './weapon-selector.component.html',
  styleUrls: ['./weapon-selector.component.css']
})
export class WeaponSelectorComponent implements OnInit {
  weaponSlot;
  @Output() weapon: Weapon;
  weapons: Array<Weapon>;
  weaponTypes: Array<WeaponType>;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.dataService.getStable('weaponSlot', '/assets/data.json').subscribe(data => {
      this.weaponSlot = data;
    });
    this.dataService.getStable('weaponTypes', '/assets/weapon-types.json').subscribe(data => {
      this.weaponTypes = data;
    });
    this.dataService.getStable('weapons', '/assets/weapons.json').subscribe(data => {
      this.weapons = data;
    });
    // console.log(this.weapons);
  }

  selectWeapon(key: string): void {
    console.log(this.weapons);
    
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      data: this.utilService.groupBy(this.weapons.filter(weapon => { return weapon.category === key }), 'type')
    });

    dialogRef.afterClosed().subscribe(weapon => {
      if (weapon) {
        this.weapon = weapon;
        this.weapon.type = this.weaponTypes.find(type => { return type.name === this.weapon.type });
      }
      console.log(this.weapon);
    });
  }

}
