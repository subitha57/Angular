import { Component } from '@angular/core';
import { LeaveserviceService } from '../leaveservice.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {
  leaveEndDate: Date=new Date();
  leaveType: string='';
  leaveStartDate:Date=new Date();

  constructor(private leaveService: LeaveserviceService) {}

  onSubmit(): void {
    // Send leave request to the backend API
    this.leaveService.submitLeaveRequest({
      startDate: this.leaveStartDate,
      endDate: this.leaveEndDate,
      type: this.leaveType
    }).subscribe(response => {
      console.log('Leave Request Submitted:', response);
    });
  }
}
