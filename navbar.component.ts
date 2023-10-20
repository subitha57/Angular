import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth:AuthService){}

  ngOnInit():void{
    
  }
  logout(){
     this.auth.removeToken();
     this.auth.canAccess();
  }
}
