import { Component } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {

  depts!:Dept[];
  errMsg!:string;

  constructor(private deptService:DeptService){
   
  }

  ngOnInit(){
    this.loadDepts();
  }

  loadDepts(){
    this.deptService.getAll().subscribe({
      next: data => this.depts=data,
      error: err => {console.log(err); this.errMsg="Fetching data failed! Please retry later!"}
    });
  }

  remove(id:number){
    if(window.confirm(`Are you sure of deleting dept#${id}?`)){
      this.deptService.deleteById(id).subscribe({
        next: () => this.loadDepts(),
        error: err => {console.log(err); this.errMsg="Deleting data failed! Please retry later!"}
      });
    }
  }

  add(dept:Dept){
    this.deptService.add(dept).subscribe({
      next: dept => this.loadDepts(),
      error: err => {console.log(err); this.errMsg="Saving data failed! Please retry later!"}
    });
  }

  update(dept:Dept){
    dept.isEditable=undefined;
    this.deptService.update(dept).subscribe({
      next: dept => this.loadDepts(),
      error: err => {console.log(err); this.errMsg="Saving data failed! Please retry later!"}
    });
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
