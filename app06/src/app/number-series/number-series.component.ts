import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;

  isJobInProgress:boolean;

  errMsg!:string|null;
  results!:number[];

  constructor(private nss:NumberSeriesService){
    this.lb=0;
    this.ub=0;
    this.isJobInProgress=false;
  }

  formSubmitted(){
    this.isJobInProgress = true;
    this.errMsg=null;
    this.results=[];

    let ob:Observable<number> = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe({
      next: v => { this.results.push(v); } ,
      error: err => { this.isJobInProgress=false; this.errMsg=err; },
      complete: () => { this.isJobInProgress=false; }
    });
  }
}
