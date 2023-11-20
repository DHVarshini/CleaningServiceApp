import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User();
  error = "";
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {

  }

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/userDashboard', data.uid]);
      },
      error => {
        console.log("Exception occured");
        this.error = "Incorrect credentials, Please enter valid credentials";
      }
    );
  }
}
