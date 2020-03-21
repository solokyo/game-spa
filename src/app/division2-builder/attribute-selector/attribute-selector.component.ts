import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Weapon } from '../shared/types/weapon';
import { WeaponType } from '../shared/types/weapon-type';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.css']
})
export class AttributeSelectorComponent implements OnInit {
  @Input() weapon: Weapon;
  @Output() updated = new EventEmitter<boolean>();
  weaponAttributes: any;
  secondaryAttribute: any;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    this.dataService.getStable('weaponAttributes', '/assets/weapon-attributes.json').subscribe(data => {
      this.weaponAttributes = data;
    });
  }

  ngOnInit(): void {
  }

  selectWeaponAttribute(weaponType: any): void {
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
        // TODO: try to be more elegant
        this.secondaryAttribute = weaponAttribute;
        this.weapon['secondaryAttribute'] = { 'bonus': [weaponAttribute] };
        this.updated.emit(weaponAttribute);
      }
    });
  }
}
