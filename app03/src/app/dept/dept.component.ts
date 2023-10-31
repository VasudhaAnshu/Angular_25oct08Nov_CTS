import { Component } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {

  depts:Dept[];
  dept:Dept;

  constructor(private deptService:DeptService){
    this.depts=this.deptService.getAll();
    this.dept={id:0,title:'',location:''};
  }

  remove(id:number){
    if(window.confirm(`Are you sure of deleting dept#${id}?`)){
      this.deptService.deleteById(id);
      this.depts=this.deptService.getAll();
    }
  }

  add(){
    this.deptService.add(this.dept);
    this.depts=this.deptService.getAll();
    this.dept={id:0,title:'',location:''};
  }
}
