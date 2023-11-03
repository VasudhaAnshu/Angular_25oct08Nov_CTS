import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';
import { EmpService } from '../services/emp.service';
import { Emp } from '../models/emp';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {

    idFC:FormControl;
    fullNameFC:FormControl;
    mobileFC:FormControl;
    mailIdFC:FormControl;
    salaryFC:FormControl;
    joinDateFC:FormControl;
    deptIdFC:FormControl;

    empForm:FormGroup;

    depts:Dept[];

    isEditing:boolean;

    constructor(private deptService:DeptService,private empService:EmpService,private router:Router,private activatedRoute:ActivatedRoute){

      this.depts=this.deptService.getAll();

      this.idFC = new FormControl(0);
      this.fullNameFC=new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(30)]);
      this.mobileFC=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
      this.mailIdFC=new FormControl("",[Validators.required,Validators.email]);
      this.salaryFC=new FormControl(null,[Validators.required,Validators.min(10000)]);
      this.joinDateFC=new FormControl(new Date().toISOString().substring(0,10),[Validators.required]);
      this.deptIdFC=new FormControl(null,[Validators.required]);

      this.empForm = new FormGroup(
        {id:this.idFC,fullName:this.fullNameFC,mobile:this.mobileFC,
          mailId:this.mailIdFC,salary:this.salaryFC,joinDate:this.joinDateFC,deptId:this.deptIdFC});

      let idParam = this.activatedRoute.snapshot.params["id"];

      if(idParam){
        this.isEditing=true;
        let emp = this.empService.getById(Number(idParam));
        this.empForm.setValue({...emp,joinDate:emp?.joinDate.toISOString().substring(0,10)});
      }else{
        this.isEditing=false;
      }
    }

    formSubmitted(){
      let emp:Emp = {...this.empForm.value,joinDate:new Date(this.empForm.value.joinDate)};
      if(this.isEditing){
        this.empService.update(emp);
      }else{
        this.empService.add(emp);
      }
      
      this.router.navigateByUrl("/emps");
    }
}
