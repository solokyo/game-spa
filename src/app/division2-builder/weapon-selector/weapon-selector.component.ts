import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component'

import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';
import { StatService } from '../shared/stat.service'
import { Weapon } from '../shared/types/weapon';
import { WeaponType } from '../shared/types/weapon-type';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'd2b-weapon-selector',
  templateUrl: './weapon-selector.component.html',
  styleUrls: ['./weapon-selector.component.css']
})
export class WeaponSelectorComponent implements OnInit {
  weaponSlot: Array<{ name: string, category: string }>;
  selectedWeapons: Array<Weapon>;
  @Output() equippedWeapon: Weapon;
  weapons: Array<Weapon>;
  weaponTypes: Array<WeaponType>;
  // selectable 'secondary' attributes for weapon
  weaponAttributes: any;
  secondaryAttribute: any;
  equippedWeapon$: BehaviorSubject<Weapon>;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
    this.equippedWeapon$ = new BehaviorSubject<Weapon>(this.equippedWeapon);
    this.selectedWeapons = new Array(3);
  }

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
    this.statService.setEquippedWeapon(this.equippedWeapon$);
  }

  selectWeapon(key: string, index: number): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      data: { key: 'weapon', value: this.utilService.groupBy(this.weapons.filter(weapon => { return weapon.category === key }), 'type') }
    });

    dialogRef.afterClosed().subscribe((weapon: Weapon) => {
      if (weapon) {
        let foo = { ...weapon };
        if (!foo.mods) {
          foo.mods = new Array();
        }
        foo.type = this.weaponTypes.find(type => { return type.name === foo.type });
        this.selectedWeapons[index] = foo;
        // reset secondary attribute
        this.secondaryAttribute = null;
        this.setEquippedWeapon(this.selectedWeapons[index]);
      }
    });
    // this.statService.setEquippedWeapon(this.selectedWeapons[0]);
  }




  updateEquippedWeapon() {
    this.equippedWeapon$.next(this.equippedWeapon);
  }

  setEquippedWeapon(equippedWeapon: Weapon): void {
    this.equippedWeapon = equippedWeapon;
    this.updateEquippedWeapon();
    // this.statService.setEquippedWeapon(this.equippedWeapon);
  }
}
