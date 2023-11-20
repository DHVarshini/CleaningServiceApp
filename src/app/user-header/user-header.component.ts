import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  user = new User();
  error = "";
  constructor(private service:UserService, private router: Router){}
  logoutUser(){
    this.router.navigate(['/home']);
  }
  confirmLogout() { 
    if(confirm("Are you sure you want to logout?")) { 
      this.logoutUser(); 
    } 
  }
}
