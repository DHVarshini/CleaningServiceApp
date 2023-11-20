import { Component } from '@angular/core';
import { Provider } from '../provider';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider-register',
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.css']
})
export class ProviderRegisterComponent {
  provider = new Provider();
  msg = "";
  constructor(private service:UserService, private router: Router){}

  ngOnInit(){

  }

  registerProvider(){
    this.service.registerProviderFromRemote(this.provider).subscribe(
      data=>{
        console.log("response received");
        this.router.navigate(['providerlogin'])
      } ,
      error=> {
        console.log("Exception occured");
        this.msg = error.error;
      }
    );
  }
}
