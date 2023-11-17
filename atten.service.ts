import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attendance } from './component/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AttenService {
    private apiUrl = 'your_api_url'; 
  
    getAttendanceData(): Observable<Attendance[]> {
    
      const data: Attendance[] = [
        { id: 1, name: 'subi', timeIn: '09:00 AM', timeOut: '05:00 PM', day: 'Monday', checkedIn: false },
        { id: 2, name: 'kabi', timeIn: '08:30 AM', timeOut: '04:30 PM', day: 'Tuesday', checkedIn: false },
       
      ];
  
      return of(data);
    }
  
    checkIn(id: number): Observable<any> {
      // Replace this with your actual check-in API call
      return of({ message: 'Checked in successfully' });
    }
  
    checkOut(id: number): Observable<any> {
      // Replace this with your actual check-out API call
      return of({ message: 'Checked out successfully' });
    }
  }

