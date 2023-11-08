import { Injectable } from '@angular/core';
import { Emp } from '../models/emp';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  empApiEndPoint:string;

  constructor(private hc:HttpClient) {
    this.empApiEndPoint="http://localhost:8888/emps";
  }

  getAll():Observable<Emp[]>{
    return this.hc.get<Emp[]>(this.empApiEndPoint);
  }

  getAllByDept(deptId:number):Observable<Emp[]>{
    return this.hc.get<Emp[]>(this.empApiEndPoint +"?deptId="+deptId);
  }

  getById(id:number):Observable<Emp>{
    return this.hc.get<Emp>(this.empApiEndPoint +"/"+id);
  }

  add(emp:Emp):Observable<Emp>{
    return this.hc.post<Emp>(this.empApiEndPoint,emp);
  }

  update(emp:Emp):Observable<Emp>{
    return this.hc.put<Emp>(this.empApiEndPoint +"/"+emp.id,emp);
  }

  deleteById(id:number):Observable<void>{
    return this.hc.delete<void>(this.empApiEndPoint +"/"+id);
  }
}
