import { Component } from '@angular/core';
import { User } from '../user';
import { PackageDetails } from '../packageDetails';
import { UserService } from '../user.service';
import { Provider } from '../provider';
import { eachproviderbookings } from '../eachproviderbookings';
@Component({
  selector: 'app-provider-bookings',
  templateUrl: './provider-bookings.component.html',
  styleUrls: ['./provider-bookings.component.css']
})
export class ProviderBookingsComponent {
  serial = 1;
  user = new User();
  provider !: Provider;
  noBooking = "";
  bookings = [];
  pbookings: eachproviderbookings[] = [];
  providerDetails!: Provider;
  eachproviderbookings: eachproviderbookings[] = [];
  providerbookings!: any;
  constructor(private userservice: UserService) {
    //console.log(userservice.currProvider);
    this.userservice.getCurrentProvider(this.userservice.currProvider).subscribe(
      data => {
        console.log(userservice.currProvider);
        this.providerDetails = data;
        //console.log(this.providerDetails);
        console.log(this.providerDetails.pbookings);
        this.providerbookings = this.providerDetails.pbookings;
        // fetching package details
        for (let booking of this.providerbookings) {
          let packageDetails = new PackageDetails();
          this.userservice.getPackageById(booking.spid).subscribe(
            data => {
              packageDetails = data;

              console.log("Package details: ", data);
              // user details
              this.userservice.getCurrentUser(booking.uid).subscribe(
                (data) => {
                  //console.log(data)
                  this.user = data;
                  console.log(this.user.bookings);
                  this.pbookings.push(new eachproviderbookings(booking.spid, booking.date, booking.timeSlot, booking.uid, packageDetails, this.user, booking.reviews, booking.rating));
                },
                error => console.log(error)
              );
            },
            error => console.log(error)
          );
        }
      },
      error => console.log(error)
    );
  }
}
