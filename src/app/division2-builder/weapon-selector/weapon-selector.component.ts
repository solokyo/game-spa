import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component'

import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';
import { StatService } from '../shared/stat.service'
import { Weapon } from '../shared/types/weapon';
import { WeaponType } from '../shared/types/weapon-type';

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
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
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
    this.dataService.getStable('weaponAttributes', '/assets/weapon-attributes.json').subscribe(data => {
      this.weaponAttributes = data;
    });
  }

  selectWeapon(key: string, index: number): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      data: { key: 'weapon', value: this.utilService.groupBy(this.weapons.filter(weapon => { return weapon.category === key }), 'type') }
    });

    dialogRef.afterClosed().subscribe(weapon => {
      if (weapon) {
        let foo = { ...weapon };
        foo.type = this.weaponTypes.find(type => { return type.name === foo.type });
        this.selectedWeapons[index] = foo;
      }
    });
    // this.statService.setEquippedWeapon(this.selectedWeapons[0]);
  }

  selectWeaponAttribute(weaponType: WeaponType, index: number): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      data: {
        key: 'attribute', value: this.weaponAttributes.filter(each => {
          return !weaponType.bonus.some(foo => {
            return foo.attribute === each.attribute;
          });
        })
      }
    });

    dialogRef.afterClosed().subscribe(weaponAttribute => {
      if (weaponAttribute) {
        this.secondaryAttribute = weaponAttribute;
        this.updateOrPush(this.selectedWeapons[index].bonus, weaponAttribute, weaponAttribute.attribute);
      }
      console.log(this.selectedWeapons[index]);
    });
    
    
  }

  private updateOrPush(arr:Array<any>, obj:any, key:string) {
    const index = arr.findIndex((e) => e[key] === obj[key]);
    if (index === -1) {
        arr.push(obj);
    } else {
        arr[index] = obj;
    }
}

  setEquippedWeapon(equippedWeapon: Weapon): void {
    this.equippedWeapon = equippedWeapon;
    this.statService.setEquippedWeapon(this.equippedWeapon);
  }
}
