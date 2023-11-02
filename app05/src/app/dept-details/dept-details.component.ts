import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent {

  @Input()
  dept!:Dept;

  @Output()
  delBtnClick:EventEmitter<number>;
  
  @Output()
  editBtnClick:EventEmitter<number>;

  constructor(){
    this.delBtnClick=new EventEmitter<number>();
    this.editBtnClick=new EventEmitter<number>();
  }

  notifyDelBtnClick(){
    this.delBtnClick.emit(this.dept.id);
  }

  notifyEditBtnClick(){
    this.editBtnClick.emit(this.dept.id);
  }
}
