import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Weapon } from './types/weapon';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Gear } from './types/gear';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  initialStats: any;
  stats: any;
  stats$: BehaviorSubject<any>;
  equippedWeapon$: BehaviorSubject<Weapon>;
  equippedWeapon: Weapon;
  equippedGears$: BehaviorSubject<Gear>;
  equippedGears: Array<Gear>;

  constructor(
    private dataService: DataService,
    private utilService: UtilService,
  ) {
    this.equippedGears = new Array<Gear>();

    this.stats$ = new BehaviorSubject('');
    this.dataService.getStable('statBoardInit', '/assets/data.json').subscribe(data => {
      this.initialStats = data;
      this.updateStats();
    });

    this.equippedWeapon$ = new BehaviorSubject<Weapon>(null);
    this.equippedWeapon$.subscribe(data => {
      this.equippedWeapon = data;
    });

    this.equippedGears$ = new BehaviorSubject<Gear>(null);
    this.equippedGears$.subscribe(data => {
      if(data){
        this.equippedGears = this.utilService.updateOrPush(this.equippedGears, data, 'type');
        console.log(this.equippedGears);
      }
    });

  }

  getStats(): Observable<any> {
    return this.stats$.asObservable();
  }

  updateEquippedWeapon(equippedWeapon: Weapon): void {
    this.equippedWeapon$.next(equippedWeapon);
    this.updateStats();
  }

  updateEquippedGear(equippedGear: Gear): void {
    console.log(equippedGear);
    
    this.equippedGears$.next(equippedGear);
    this.updateStats();
  }

  // Get a copy from initial stats then bind all object that contains attributes together and do sum.
  updateStats(): void {
    this.stats = { ...this.initialStats };
    this.sum({ ...this.equippedWeapon, ...this.equippedGears });// ...gearSetsBouns, ...gears, ...specialization
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
