import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeObj: EmployeeObj;
  sortBy: string;
  searchText: string;
  employeeArr: EmployeeObj[] = [];

  constructor() {
    this.employeeObj = new EmployeeObj();
    this.searchText = "";
    this.sortBy = "";
  }
  ngOnInit() {
    this.getAllUsers();
  }
  onSave() {

    this.employeeArr.push(this.employeeObj)
    const isData = localStorage.getItem("EmpData");
    if (isData == null) {
      const newArr = [];
      this.employeeObj.EmployeeId = 0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr))
    } else {
      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem('EmpData', JSON.stringify(oldData));
    }
    this.employeeObj = new EmployeeObj();
    this.getAllUsers();
  }
  getAllUsers() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData
    }

  }
  onEdit(item: EmployeeObj) {
    this.employeeObj = item;
  }
  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index].EmployeeId == item.EmployeeId) {
          localData.splice(0, 1);
        }
      }
      localStorage.setItem("EmpData", JSON.stringify(localData));
    }
  }
  onSearch() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      if (this.sortBy == 'Name') {
        const filteredData = localData.filter((m: EmployeeObj) => m.FirstName.startsWith(this.searchText) ||m.LastName.startsWith(this.searchText) )
        this.employeeArr = filteredData;
      }
    }
  }

}
export class EmployeeObj {
  EmployeeId: number;
  FirstName: string;
  LastName: string;
  Designation: string;
  Skills: string;
  Core: string;
  IsCertification: string;
  Certification: string;
  Company: string;
  FewDetails: string;

  constructor() {
    this.EmployeeId = 0;
    this.FirstName = '';
    this.LastName = '';
    this.Designation = "";
    this.Skills = '';
    this.Core = '';
    this.IsCertification = '';
    this.Certification = '';
    this.Company = '';
    this.FewDetails = '';

  }

}
