import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent {

  @Input()
  dept:Dept;

  @Output()
  formSubmitted:EventEmitter<Dept>;

  @Output()
  cancelEditable:EventEmitter<number>;

  constructor(){
    this.dept={id:0,title:'',location:''};
    this.formSubmitted=new EventEmitter<Dept>();
    this.cancelEditable=new EventEmitter<number>();
  }

  notifyFormSubmitted(){
    this.formSubmitted.emit(this.dept);
    this.dept={id:0,title:'',location:''};
  }

  cancelBtnClicked(){
    if(this.dept.isEditable){
      this.cancelEditable.emit(this.dept.id);
    }else{
      this.dept={id:0,title:'',location:''};
    }
  }
}
