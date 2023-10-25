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
      "empId": 0,
      "empName": "",
      "empContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }

  }

  ngOnInit(): void {
    debugger;
    this.loadAllEmployee();
  }
  loadAllEmployee() {
    debugger;
    this.empsrv.getAllEmployee().subscribe((res: any) => {
      debugger;
      this.employeeArray = res.data;
    })
  }
  onSave() {
    debugger;
    this.empsrv.CreateEmployee(this.employeeObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
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
  onDelete(empId:number){
    this.empsrv.deleteEmpById(empId).subscribe((res: any) => {
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
