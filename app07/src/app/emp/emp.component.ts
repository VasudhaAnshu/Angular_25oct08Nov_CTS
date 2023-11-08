import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Emp } from '../models/emp';
import { EmpService } from '../services/emp.service';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  emps!:Emp[];
  depts!:Dept[];
  errMsg!:string;
  currentDeptId!:number;

  constructor(private empService:EmpService,private deptService:DeptService,private activatedRoute:ActivatedRoute){
    
  }

  ngOnInit(){
    this.deptService.getAll().subscribe({
      next: data => { 
        this.depts=data; 
        this.depts.push({id:-1,title:"ALL",location:''});
        this.depts.sort((d1,d2) => (d1.title>d2.title?1:(d1.title<d2.title?-1:0)));

        let deptIdParam = this.activatedRoute.snapshot.params["deptId"];

        this.currentDeptId= deptIdParam ? Number(deptIdParam) : -1;
        this.loadEmpsByDept();
      },
      error: err => {console.log(err); this.errMsg="Fetching data failed! Please retry later!"}
    });
  }

  loadEmpsByDept(){
    let ob:Observable<Emp[]> = this.currentDeptId===-1?
      this.empService.getAll():
      this.empService.getAllByDept(this.currentDeptId);

    ob.subscribe({
      next: data => this.emps=data,
      error: err => {console.log(err); this.errMsg="Fetching data failed! Please retry later!"}
    })
  }

  remove(id:number){
    if(window.confirm(`Are you sure of deleting emp#${id}?`)){
      this.empService.deleteById(id).subscribe({
        next: () => this.loadEmpsByDept(),
        error: err => {console.log(err); this.errMsg="Deleting data failed! Please retry later!"}
      });
    }
  }
}
