import { Injectable } from '@angular/core';
import { Dept } from '../models/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  depts:Dept[];
  nextDeptId:number;

  constructor() {
    this.depts=[
      {id:101,title:"HR",location:"DELHI"},
      {id:102,title:"ACCOUNTS",location:"MUMBAI"},
      {id:103,title:"FINANCE",location:"PUNE"},
      {id:104,title:"OPERATIONS",location:"HYDERABAD"},
      {id:105,title:"DELIVERY",location:"VIZAG"}
    ];
    this.nextDeptId=106;
  }

  getAll():Dept[]{
    return this.depts;
  }

  getById(id:number):Dept|undefined{
    return this.depts.find(d => d.id===id);
  }

  add(dept:Dept){
    dept.id=this.nextDeptId;
    this.depts.push(dept);
    this.nextDeptId++;
  }  

  update(dept:Dept){
    let index = this.depts.findIndex(d => d.id===dept.id);
    if(index>-1){
      this.depts[index]=dept;
    }
  }

  deleteById(id:number){
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts.splice(index,1);
    }
  }
}
