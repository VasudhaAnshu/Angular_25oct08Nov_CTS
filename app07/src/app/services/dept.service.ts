import { Injectable } from '@angular/core';
import { Dept } from '../models/dept';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  detpApiEndPoint:string;

  constructor(private hc:HttpClient) {
    this.detpApiEndPoint="http://localhost:8888/depts";
  }

  getAll():Observable<Dept[]> {
    return this.hc.get<Dept[]>(this.detpApiEndPoint);
  }

  getById(id:number):Observable<Dept>{
    return this.hc.get<Dept>(this.detpApiEndPoint +"/"+id);
  }

  add(dept:Dept):Observable<Dept>{
    return this.hc.post<Dept>(this.detpApiEndPoint,dept);
  }  

  update(dept:Dept):Observable<Dept>{
    return this.hc.put<Dept>(this.detpApiEndPoint + "/" + dept.id,dept);
  }  

  deleteById(id:number):Observable<void>{
    return this.hc.delete<void>(this.detpApiEndPoint +"/" + id);
  }
}
