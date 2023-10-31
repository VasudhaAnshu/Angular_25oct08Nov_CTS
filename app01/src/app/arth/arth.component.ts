import { Component } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent {

  operand1:number;
  operand2:number;

  constructor(){
    this.operand1=0;
    this.operand2=0;
  }
}
