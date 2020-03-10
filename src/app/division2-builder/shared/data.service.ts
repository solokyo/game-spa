import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeaponSlot } from './types/weapon-slot';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  weaponSlot: WeaponSlot;
  stats: any;

  constructor(
    private httpClient: HttpClient
  ) {

  }
  init() {

  }
  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  /**
   * Use this method to get data that unlikely to change.
   */
  getStable(key: string, url: string): Observable<any> {
    return new Observable(observer => {
      if (this[key]) {
        observer.next(this[key]);
        return observer.complete();
      }
      this.httpClient.get(url).subscribe(data => {
        this[key] = data[key];
        observer.next(this[key]);
        observer.complete();
      })
    });

  }
}
