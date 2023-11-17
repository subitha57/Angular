import { Component,OnInit } from '@angular/core';
import { AttenService } from 'src/app/atten.service';
export interface Attendance {
  id: number;
  name: string;
  timeIn: string;
  timeOut: string;
  day: string;
  checkedIn: boolean;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
   
  attendanceData: Attendance[] = [];

  constructor(private attendanceService: AttenService) {}

  ngOnInit(): void {
    this.loadAttendanceData();
  }

  loadAttendanceData(): void {
    this.attendanceService.getAttendanceData().subscribe(
      data => {
        this.attendanceData = data;
      },
     
    );
  }

  checkIn(id: number): void {
    this.attendanceService.checkIn(id).subscribe(
      response => {
        console.log(response.message);
        this.loadAttendanceData();
      },
      
    );
  }

  checkOut(id: number): void {
    this.attendanceService.checkOut(id).subscribe(
      response => {
        console.log(response.message);
        this.loadAttendanceData();
      },
     
    );
  }
}
  
  
  

