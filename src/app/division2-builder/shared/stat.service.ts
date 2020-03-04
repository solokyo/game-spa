import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  stats;
  constructor() {
    this.stats = {};
  }

  getStats(){
    return this.stats;
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
