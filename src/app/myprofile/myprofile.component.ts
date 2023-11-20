import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  UserDetails!: User;
  constructor(private userservice: UserService) {

  }
  ngOnInit(): void {
    this.userservice.getCurrentUser(this.userservice.currUser).subscribe(
      data => {
        this.UserDetails = data;
      },
      error => console.log(error)
    );
  }
}
