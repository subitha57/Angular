import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/login/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  UserName:string='';
 OrgName:string="";
 Password:string='';
  

  constructor(private router:Router,private authService:AuthService) {}

  
  onSubmit() {
    this.authService.login(this.UserName,this.OrgName, this.Password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigateByUrl("dashboard")
      },
     
    );
  }
  hide=true;
  
}


