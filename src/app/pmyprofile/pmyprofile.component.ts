import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Provider } from '../provider';
@Component({
  selector: 'app-pmyprofile',
  templateUrl: './pmyprofile.component.html',
  styleUrls: ['./pmyprofile.component.css']
})
export class PmyprofileComponent {
  ProviderDetails!:Provider;
  constructor(private userservice:UserService){
    
  } 
  ngOnInit(): void { 
    this.userservice.getCurrentProvider(this.userservice.currProvider).subscribe( 
      data => {
        this.ProviderDetails = data; 
    }, 
    error => console.log(error) 
    ); 
  } 
}
