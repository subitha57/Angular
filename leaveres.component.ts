import { Component } from '@angular/core';
import { LeaveresService } from '../leaveres.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-leaveres',
  templateUrl: './leaveres.component.html',
  styleUrls: ['./leaveres.component.css']
})
export class LeaveresComponent {
  employeeArray: any[] = [];

   "Gender":string;
   "leaveType":string;
  "Numberofdays":number;
  "Command":string;
  "Status":string;
 
constructor(private leaveService: LeaveresService,private empsrv:EmployeeService,
  private route:ActivatedRoute,private http:HttpClient) {
 
}
request:any;
onSubmit(_id:number): void {
  this.leaveService.submitLeaveResponse(_id).subscribe((res)=>{
    alert(res.message);
  })
  
}
 
}
