import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-weapon-selector',
  templateUrl: './weapon-selector.component.html',
  styleUrls: ['./weapon-selector.component.css']
})
export class WeaponSelectorComponent implements OnInit {
  weaponSlot;
  weapon;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(val => this.weaponSlot = val.weaponSlot);
    // console.log(this.weaponSlot);
  }

  selectWeapon(key: string){
    this.weapon = {};
    console.log('selectWeapon() evaluated');
    
  }

}
