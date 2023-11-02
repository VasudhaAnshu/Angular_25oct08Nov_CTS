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

  constructor(private deptService:DeptService){
    this.depts=this.deptService.getAll();
  }

  remove(id:number){
    if(window.confirm(`Are you sure of deleting dept#${id}?`)){
      this.deptService.deleteById(id);
      this.depts=this.deptService.getAll();
    }
  }

  add(dept:Dept){
    this.deptService.add(dept);
    this.depts=this.deptService.getAll();
  }

  update(dept:Dept){
    dept.isEditable=undefined;
    this.deptService.update(dept);
    this.depts=this.deptService.getAll();
  }

  markEditable(id:number){
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts[index].isEditable=true;
    }    
  }

  unMarkEditable(id:number){
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts[index].isEditable=undefined;
    }    
  }
}
