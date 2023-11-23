import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  
  employeeArray: any[] = [];
  employeeObj: any;

  constructor(private empsrv: EmployeeService) {
    this.resetObj();

  }
  resetObj() {
    this.employeeObj = {
      "Name": "",
      "UserName":"",
      "Gender":"",
      "DOB":"10-04-1990",
      "DOJ":"01-09-2023",
      "ContactNo": "",
      "Email": "",
      "Address": "",
      "Designation":"",
      "OrgName":"",
      "BankName": "",
      "Branch": "",
      "Ifsc": "",
      "AccountNo": "",
      "Salary": "",
      "MaritalStatus":"",
      "BloodGroup":"",
      "Password":"",
      "City": "",
      "Pincode": "",
      "State": "",
      "Usertype":""
     }

  }

  ngOnInit(): void {
    
    this.loadAllEmployee();
  }
  loadAllEmployee() {
    
    this.empsrv.getAllEmployee().subscribe((res:any) => {
   
      this.employeeArray = res.data;
    })
  }
  onSave() {
  
    this.empsrv.createEmployee(this.employeeObj).subscribe((res:any) => {
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj();  
       
      } else {
        alert(res.message);
      }
    })
  }
  /*onUpdate(){
    this.empsrv.updateEmployee(this.employeeObj._id,this.employeeObj).subscribe((res: any) => {
    debugger;
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj(); 
      } else {
        alert(res.message);
      }
    })
  }*/
  onUpdate() {
    this.empsrv.updateEmployee(this.employeeObj._id, this.employeeObj).subscribe((res: any) => {
      if (res.result) {
        // Update the data array with the updated employee details
        const updatedEmployeeIndex = this.employeeArray.findIndex(emp => emp._id === this.employeeObj._id);
        if (updatedEmployeeIndex !== -1) {
          this.employeeArray[updatedEmployeeIndex] = { ...this.employeeObj };
        }
        alert(res.message);
        this.resetObj();
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.empsrv.deleteUser(id).subscribe((res: any) => {
        if (res.result) {
          this.loadAllEmployee(); // Reload the user list after deletion
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
    }
  }
   /*onDelete(Empid:number){
    this.empsrv.delete(Empid).subscribe((res: any) => {
   debugger;
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
      } else {
        alert(res.message);
      }
    })

  }*/
  onEdit(id:number){
    this.empsrv.getEmpById(id).subscribe((res:any)=>{
      this.employeeObj =res.data;
    })

  }
  Gender: string[] = ['Male', 'Female', 'Other'];
  selectedGender: string = '';

  MaritalStatus: string[] = ['Married', 'Single'];
  selectedMaritalStatus: string = '';
  
    UserType: string[] = ['HR', 'Employee', 'Manager', 'Admin'];
  selectedRole: string = '';
}
