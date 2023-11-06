import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    const bgJob = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid range, hence task aborted!");
        return;
      }

      let n = lb;

      let handler = setInterval( () => {
        observer.next(n);
        n++;
        if(n===ub){
          clearInterval(handler);
          observer.complete();
        }
      } ,500);

    };

    let ob : Observable<number> = new Observable<number>(bgJob);
    return ob;
  }
}
