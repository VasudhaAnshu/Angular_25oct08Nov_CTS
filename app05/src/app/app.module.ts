import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DeptComponent } from './dept/dept.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptHeaderComponent } from './dept-header/dept-header.component';
import { EmpComponent } from './emp/emp.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/depts'},
  {path:'depts',component:DeptComponent},
  {path:'emps',component:EmpComponent},
  {path:'newEmp',component:EmpFormComponent},
  {path:'editEmp/:id',component:EmpFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DeptComponent,
    DeptDetailsComponent,
    DeptFormComponent,
    DeptHeaderComponent,
    EmpComponent,
    EmpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
