import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from 'src/app/attendance/attendance.service';
import { IAttendance, attendance } from 'src/app/classes/employee';

import { EmployeeService } from 'src/app/service/employee.service';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  
  attendanceArray:IAttendance[]=[];
   attendanceObj:attendance=new attendance();
   employeeArray: any[]=[];
   

   constructor(private empsrv:EmployeeService,private http:HttpClient,
    private attendanceService: AttendanceService,private route: ActivatedRoute,){

   }
  
   ngOnInit(): void {
     this.getEmployee();  
     this.loadALLAttendance();
    
   }
   loadALLAttendance(){
    this.http.get("").subscribe((res:any)=>{
      this.attendanceArray=res.data;
    })
   }

   getEmployee(){
    this.empsrv.getAllEmployee().subscribe((result:any)=>{
      this.employeeArray=result.data;

    })
   }

   onSave(){
    this.http.post("",this.attendanceObj).subscribe((res:any)=>{
      if(res.result){
        this.loadALLAttendance();
        this.attendanceObj=new attendance();
      }
      alert(res.message)
    })

   }
   
   isChecked = false;
   id: number = 0; // Set a default value or handle it appropriately
    employees: any[] = []; // Assuming you have a type 'Employee' with properties 'id' and 'username'

onToggle() {
  if (this.isChecked) {
    this.attendanceService.checkIn(this.id).subscribe(
      (response) => {
        console.log('Checked In:', response);
      },
      (error) => {
        console.error('Check-in error:', error);
      }
    );
  } else {
    this.attendanceService.checkOut(this.id).subscribe(
      (response) => {
        console.log('Checked Out:', response);
      } 
    );
  }
}


workingHoursData: any[]=[];
calculateWorkingHours(checkIn: string, checkOut: string): string {
  if (checkIn && checkOut) {
    const startTime = new Date(checkIn);
    const endTime = new Date(checkOut);

    const timeDiff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  }

  return 'N/A';
}
}
