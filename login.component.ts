import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formdata={email:"",password:''};
  submit=false;
  loading=false;
  errorMessage="";
  constructor(private auth:AuthService){
  }
ngOnInit(){
  this.auth.canAuthendicate();
}

onSubmit(){
  this.loading=true; 
 this.auth.login(this.formdata.email, this.formdata.password)
 .subscribe({
  next:data=>{
    this.auth.storeToken(data.idToken);
    console.log('logged user token is '+data.idToken);
    this.auth.canAuthendicate();
    
  },
  error:data=>{
    if(data.error.error.message=="INVALID_PASSWORD" ||data.error.error.message=="INVALID_EMAIL"){
      this.errorMessage="Invalid credentials !";
    }else{
      this.errorMessage="unknown";
    }

  }
  }).add(()=>{
    this.loading=false;
    console.log('login process completed')
  })
 }

}

