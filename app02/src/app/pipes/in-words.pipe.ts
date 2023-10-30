import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits = [
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {

    let strValue = `${value}`;
    let result ="";

    for(let i=0;i<strValue.length;i++){
      let ch = strValue.charAt(i);
      if("."===ch){
        result += " dot ";
      }else{
        result = `${result} ${this.digits[Number(ch)]}`;
      }
    }

    return result;
  }

}
