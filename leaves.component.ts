import { Component } from '@angular/core';
import { LeaveserviceService } from '../leaveservice.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {
  employeeArray: any[] = [];
  
    "username":string;
    "Name":string;
     "startDate":"10-04-1990"
    "endDate":"01-09-2023";
    "leaveType":string;
    "Numberofdays":string;
    "Reason":string;
    "Replacementworker":string;
   
  constructor(private leaveService: LeaveserviceService,private empsrv:EmployeeService,
    private route:ActivatedRoute,private http:HttpClient) {
   
  }
request:any;
  onSubmit(request:string): void {
   this.leaveService.submitLeaveRequest(request).subscribe((res)=>{
      alert(res.message);
    })
    
  }
  
  Gender: string=''
}

