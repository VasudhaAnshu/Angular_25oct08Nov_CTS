import { Injectable } from '@angular/core';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  emps:Emp[];
  nextEmpId:number;

  constructor() {
    this.emps=[
      {id:1,fullName:"Vamsy Kiran",mobile:"9052224753",mailId:"vamsy@gmail.com",salary:65000,joinDate:new Date("2023-01-01"),deptId:101},
      {id:2,fullName:"Suseela",mobile:"9052224752",mailId:"suseela@gmail.com",salary:75000,joinDate:new Date("2023-02-01"),deptId:101},
      {id:3,fullName:"Sagar",mobile:"9052224754",mailId:"sagar@gmail.com",salary:55000,joinDate:new Date("2023-01-01"),deptId:102},
      {id:4,fullName:"Gowri Saradha",mobile:"9052224755",mailId:"saradha@gmail.com",salary:85000,joinDate:new Date("2023-02-01"),deptId:102},
      {id:5,fullName:"Indhikaa Valli",mobile:"9052224756",mailId:"indhikaa@gmail.com",salary:45000,joinDate:new Date("2023-01-01"),deptId:103}
    ];
    this.nextEmpId=6;
  }

  getAll():Emp[]{
    return [...this.emps];
  }

  getAllByDept(deptId:number):Emp[]{
    return this.emps.filter(e => e.deptId===deptId);
  }

  getById(id:number):Emp|undefined{
    return this.emps.find(e => e.id===id);
  }

  add(emp:Emp){
    emp.id=this.nextEmpId;
    this.emps.push(emp);
    this.nextEmpId++;
  }  

  update(emp:Emp){
    let index = this.emps.findIndex(e => e.id===emp.id);
    if(index>-1){
      this.emps[index]=emp;
    }
  }

  deleteById(id:number){
    let index = this.emps.findIndex(e => e.id===id);
    if(index>-1){
      this.emps.splice(index,1);
    }
  }
}
