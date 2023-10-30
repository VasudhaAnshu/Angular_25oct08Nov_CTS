import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  logos:string[];
  logoIndex:number;
  logoWidth:number;
  applyBordered:boolean;
  applyCentered:boolean;

  constructor(){
    this.logoIndex=0;
    this.logos=[
      "assets/imgs/w1.png",
      "assets/imgs/w2.jpeg",
      "assets/imgs/w3.jpeg",
      "assets/imgs/w4.jpeg",
    ];
    this.logoWidth=100;
    this.applyBordered=true;
    this.applyCentered=true;
  }

  changeLogo(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
