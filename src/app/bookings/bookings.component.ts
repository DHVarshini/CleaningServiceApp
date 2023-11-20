import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { PackageDetails } from '../packageDetails';
import { eachuserbookings } from '../eachuserbookings';
import { Provider } from '../provider';
import { eachproviderbookings } from '../eachproviderbookings';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  serial = 1;
  user = new User();
  packageDetails = new PackageDetails();
  provider !: Provider;
  noBooking = "";
  bookings = [];
  ubookings: eachuserbookings[] = [];
  userDetails!: User;
  userbookings!: any;
  constructor(private userservice: UserService) {
    this.userservice.getCurrentUser(this.userservice.currUser).subscribe(
      data => {
        this.userDetails = data;
        console.log(this.userDetails.bookings.psid);
        this.userbookings = this.userDetails.bookings;
        for (let booking of this.userbookings) {
          this.userservice.
            getPackageById(booking.spid).subscribe(
              data => {
                this.packageDetails = data;

                //provider
                this.userservice.getCurrentProvider(booking.psid).subscribe(
                  (data) => {
                    this.provider = data;
                    console.log(this.provider.psid);
                    this.ubookings.push(new eachuserbookings(booking.spid, booking.date, booking.timeSlot, booking.psid, this.packageDetails, this.provider));
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



