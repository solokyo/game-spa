import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Return an object that contains arrays grouped by key
   * @param xs data
   * @param key
   */
  groupBy(xs: Array<any>, key: string): ({[propName: string]:Array<any>}) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  /**
   * Return an array of objects that contains arrays grouped by key
   * @param xs 
   * @param key propName: string | prop selector: function
   */
  groupByArray(xs: Array<any>, key): (Array<{key:string, values: Array<any>}>) {
      return xs.reduce(function (rv, x) {
          let v = key instanceof Function ? key(x) : x[key];
          let el = rv.find((r) => r && r.key === v);
          if (el) { el.values.push(x); }
          else { rv.push({ key: v, values: [x] }); }
          return rv;
      }, []);
  } 
}
