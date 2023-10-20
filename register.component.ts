import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formdata = { name: "", email: '', password: '' };
  submit = false;
  errorMessage = "";
  loading = false;

  constructor(private auth: AuthService,private router:Router) { }
 ngOnInit(){
  this.auth.canAuthendicate();
 }
  onSubmit() {
    console.log(this.formdata);
    this.loading = true;
    this.auth.register(this.formdata.name, this.formdata.email, this.formdata.password)
      .subscribe({
        next: data => {
          this.auth.storeToken(data.idToken);
          console.log('registered idToken is '+data.idToken)
          this.auth.canAuthendicate();

        },
        error: data => {
          if (data.error.error.message == 'INVALID_EMAIL') {
            this.errorMessage = "Invalid Email!";
          } else if (data.error.error.message == "EMAIL_EXISTS") {
            this.errorMessage = "Already Email Exists!"
          } else {
            this.errorMessage = "Unknow error occured when creating this account";
          }

        } 
      
}).add(()=>{
  this.loading=false;
  console.log('register completed')
})
}
}
