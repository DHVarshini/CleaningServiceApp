import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { BookComponent } from '../book/book.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private userservice:UserService,private actroute:ActivatedRoute)
  {
      this.actroute.params.subscribe(params => {
      this.userservice.currUser = params['uid'];
    });
  }
}
