import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    
    return this.http.get('https://elon-leave-emp.onrender.com/api/users');
  }
  createEmployee(obj:any):Observable<any>{
    debugger;
    return this.http.post('https://elon-leave-emp.onrender.com/api/register',obj);
  }
  updateEmployee(obj:any):Observable<any>{
    
    return this.http.post('',obj);
  }
  getEmpById(id:number){
    return this.http.get(" "+id);

  }
  deleteEmpById(id:number){
    return this.http.get(""+id);
  }
}
