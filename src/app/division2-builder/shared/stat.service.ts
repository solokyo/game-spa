import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  stats: any;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getStable('statBoardInit','/assets/data.json').subscribe(data => {
      this.stats = data;
      console.log(this.stats);
    });
  }

  sum(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        if (key === 'bonus') {
          this.sumStats(obj[key]);
        }
        this.sum(obj[key]);
      }
    })
  }

  private sumStats(obj) {
    obj.forEach(function (bonus) {
      if (this.stats.hasOwnProperty(bonus.attribute)) {
        this.stats[bonus.attribute] = this.stats[bonus.attribute] + bonus.value;
      } else {
        this.stats[bonus.attribute] = bonus.value;
      }
    });
    console.log(this.stats);
  }
}
