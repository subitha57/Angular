import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    
    return this.http.get('https://management-system-pbat.onrender.com/api/getall');
  }
  createEmployee(obj:any):Observable<any>{
    debugger;
    return this.http.post('https://management-system-pbat.onrender.com/api/register',obj);
  }
  updateEmployee(obj:any):Observable<any>{
    
    return this.http.post('https://management-system-pbat.onrender.com/api/update/user_id ',obj);
  }
  getEmpById(id:number){
    return this.http.get("https://management-system-pbat.onrender.com/api/employee/user_id"+id);

  }
  deleteEmpById(id:number){
    return this.http.get(""+id);
  }
}
