import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeaponSlot } from './types/weapon-slot';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  weaponSlot: WeaponSlot;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.init();
  }
  init(){
    this.httpClient.get('/assets/data.json').subscribe(data => {
      this.weaponSlot = data['weaponSlot'];
      console.log(this.weaponSlot);
    });
  }
  getWeaponSlot(): WeaponSlot{
    console.log(this.weaponSlot);
    return this.weaponSlot;
  }
}
