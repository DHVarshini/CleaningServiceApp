import { Component } from '@angular/core';
import { Provider } from '../provider';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent {
  provider = new Provider();
  error = "";
  constructor(private service:UserService, private router: Router){}
  ngOnInit(){}
  loginProvider(){
    this.service.loginProviderFromRemote(this.provider).subscribe(
      data=>{
        console.log("response received");
        this.router.navigate(['/providerDashboard',data.psid])
      } ,
      error=> {
        console.log("Exception occured");
        this.error="Incorrect credentials, Please enter valid credentials";
      }
    );
  }
}
