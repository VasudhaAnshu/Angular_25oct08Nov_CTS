import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Emp } from '../models/emp';
import { EmpService } from '../services/emp.service';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  emps!:Emp[];
  depts:Dept[];
  currentDeptId:number;

  constructor(private empService:EmpService,private deptService:DeptService,private activatedRoute:ActivatedRoute){
    
    this.depts=this.deptService.getAll();
    this.depts.push({id:-1,title:"ALL",location:''});
    this.depts.sort((d1,d2) => (d1.title>d2.title?1:(d1.title<d2.title?-1:0)));

    let deptIdParam = this.activatedRoute.snapshot.params["deptId"];

    this.currentDeptId= deptIdParam ? Number(deptIdParam) : -1;
    this.loadEmpsByDept();
  }

  loadEmpsByDept(){
    this.emps= this.currentDeptId===-1?
      this.empService.getAll():
      this.empService.getAllByDept(this.currentDeptId);
  }
}
