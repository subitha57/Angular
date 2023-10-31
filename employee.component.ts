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
      "EmpId": 0,
      "Username": "",
      "EmpContactNo": "",
      "Empemail": "",
      "AddressLine1": "",
      "AddressLine2": "",
      "Pincode": "",
      "City": "",
      "State": "",
      "BankName": "",
      "Ifsc": "",
      "AccountNo": "",
      "BankBranch": "",
      "Salary": 0,
      "Password":"",
    }

  }

  ngOnInit(): void {
    
    this.loadAllEmployee();
  }
  loadAllEmployee() {
    debugger;
    this.empsrv.getAllEmployee().subscribe((res:any) => {
      debugger;
      this.employeeArray = res.data;
    })
  }
  onSave() {
    debugger;
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
  onUpdate(){
    this.empsrv.updateEmployee(this.employeeObj).subscribe((res: any) => {
    debugger;
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj(); 
      } else {
        alert(res.message);
      }
    })

  }
  onEdit(id:number){
    this.empsrv.getEmpById(id).subscribe((res:any)=>{
      this.employeeObj =res.data;
    })

  }
  onDelete(EmpId:number){
    this.empsrv.deleteEmpById(EmpId).subscribe((res: any) => {
   debugger;
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
      } else {
        alert(res.message);
      }
    })

  }
}
