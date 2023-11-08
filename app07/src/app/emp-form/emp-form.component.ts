import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';
import { EmpService } from '../services/emp.service';
import { Emp } from '../models/emp';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

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

    depts!:Dept[];

    errMsg!:string;

    isEditing!:boolean;

    constructor(private deptService:DeptService,private empService:EmpService,private router:Router,private activatedRoute:ActivatedRoute){

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
    }

    ngOnInit(){
      this.deptService.getAll().subscribe({
        next: data => {
          this.depts=data;

          let idParam = this.activatedRoute.snapshot.params["id"];

          if(idParam){
            this.isEditing=true;
            this.empService.getById(Number(idParam)).subscribe({
              next: emp => this.empForm.setValue(emp)
            });
          }else{
            this.isEditing=false;
          }
        },
        error: err => {console.log(err); this.errMsg="Unable to load data! Please retry later!";}
      });
    }

    formSubmitted(){
      let emp:Emp = this.empForm.value;
      
      let ob:Observable<Emp>;

      if(this.isEditing){
        ob = this.empService.update(emp);
      }else{
        ob = this.empService.add(emp);
      }
      
      ob.subscribe({
        next: data => this.router.navigateByUrl("/emps"),
        error: err => {console.log(err); this.errMsg="Unable to save data! Please retry later!";}
      })
      
    }
}
