import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent {
  constructor(private userservice:UserService,private actroute:ActivatedRoute)
  {
      this.actroute.params.subscribe(params => {
      this.userservice.currProvider = params['psid'];
    });
  }
}
