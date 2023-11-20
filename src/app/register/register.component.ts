import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm} from '@angular/forms';
import { UserService } from '../user.service'; 
import { User } from '../user';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new User();
  msg = "";
  constructor(private service:UserService, private router: Router){}
  ngOnInit(){
  }
  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.router.navigate(['login'])
      } ,
      error=> {
        console.log("Exception occured");
        this.msg = error.error;
      }
    );
  }
}
