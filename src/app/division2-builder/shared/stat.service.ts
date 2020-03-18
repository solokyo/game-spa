import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Weapon } from './types/weapon';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  initialStats: any;
  stats: any;
  stats$: BehaviorSubject<any>;
  equippedWeapon: Weapon;
  constructor(
    private dataService: DataService
  ) {
    this.stats$ = new BehaviorSubject('');
    this.dataService.getStable('statBoardInit', '/assets/data.json').subscribe(data => {
      this.initialStats = data;
      this.updateStats();
    });
  }

  getStats(): Observable<any> {
    return this.stats$.asObservable();
  }

  // setEquippedWeapon(equippedWeapon: Weapon): void {
  //   this.equippedWeapon = equippedWeapon;
  //   this.updateStats();
  // }

  setEquippedWeapon(equippedWeapon$: BehaviorSubject<Weapon>): void {
    equippedWeapon$.subscribe(equippedWeapon=>{
      this.equippedWeapon = equippedWeapon;
      this.updateStats();
    })
  }

  // Get a copy from initial stats then bind all object that contains attributes together and do sum.
  updateStats(): void {
    this.stats = { ...this.initialStats };
    this.sum({ ...this.equippedWeapon, });// ...gearSetsBouns, ...gears, ...specialization
    this.stats$.next(this.stats);
  }

  private sum(obj): void {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        if (key === 'bonus') {
          this.sumStats(obj[key]);
        }
        this.sum(obj[key]);
      }
    });
  }

  private sumStats(obj) {
    obj.forEach((bonus) => {
      if (this.stats.hasOwnProperty(bonus.attribute)) {
        this.stats[bonus.attribute] = this.stats[bonus.attribute] + bonus.value;
      } else {
        this.stats[bonus.attribute] = bonus.value;
      }
    });
  }
}
