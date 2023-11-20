import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { PackageDetails } from '../packageDetails';
import { eachuserbookings } from '../eachuserbookings';
import { Provider } from '../provider';
import { eachproviderbookings } from '../eachproviderbookings';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  serial = 1;
  user = new User();
  provider !: Provider;
  noBooking = "";
  bookings = [];
  ubookings: eachuserbookings[] = [];
  userDetails!: User;
  providerDetails!: Provider;

  pbookings: eachproviderbookings[] = [];
  userbookings!: any;
  providerbookings!: any;
  booking!: any;
  ratebooking!: any
  constructor(private userservice: UserService) {
    this.ratebooking = { selectedDate: '', Timings: '', spid: '', userId: '', reviews: '', rating: '' };
    this.booking = {};

    this.userservice.getCurrentUser(this.userservice.currUser).subscribe(
      data => {
        this.userDetails = data;
        console.log(this.userDetails.bookings);

        this.userbookings = this.userDetails.bookings;
        /// fetching package details
        for (let packbooking of this.userbookings) {
          let packageDetails = new PackageDetails();
          this.userservice.
            getPackageById(packbooking.spid).subscribe(
              data => {
                packageDetails = data;
                console.log(this.userDetails.bookings.psid);
                //provider
                this.userservice.getCurrentProvider(packbooking.psid).subscribe(
                  (data) => {
                    this.provider = data;
                    console.log(this.provider);
                    console.log(this.provider.psid);
                    this.ubookings.push(new eachuserbookings(packbooking.spid, packbooking.date, packbooking.timeSlot, packbooking.psid, packageDetails, this.provider));

                    this.pbookings.push(new eachproviderbookings(packbooking.spid, packbooking.date, packbooking.timeSlot, packbooking.uid, packageDetails, this.userDetails, packbooking.reviews, packbooking.rating))
                    console.log(this.pbookings);
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
  userreviewrating(booking: any, review: string, rating: string) {
    this.booking = booking;
    this.userservice.rateProvider = this.booking.psid;
    console.log(this.userservice.rateProvider);

    this.booking.rating = rating;
    this.booking.reviews = review;
    console.log(this.booking.rating);

    this.userservice.postUserReviewInProvider(this.booking.selectedDate, this.booking.Timings, this.booking.spid, this.booking.userId, this.booking.reviews, this.booking.rating).subscribe(
      (response) => {
        window.alert('Rating and Reviews given successfully')
      });

  }









  // userreviewrating(ratebooking: any, review: string, rating: string){
  //   this.ratebooking=this.booking;
  //   console.log(this.ratebooking); 
  //   console.log(this.ratebooking.psid); 

  //   this.userservice.rateProvider=this.ratebooking.psid;
  //   console.log(this.userservice.rateProvider);

  //   this.ratebooking.rating=rating;
  //   this.ratebooking.reviews=review;
  //   console.log(this.booking.rating);

  //   this.userservice.postUserReviewInProvider(this.ratebooking.selectedDate, this.ratebooking.Timings, this.booking.spid, this.ratebooking.userId, this.ratebooking.reviews, this.ratebooking.rating).subscribe(
  //       (response) => {
  //         window.alert('Rating and Reviews given successfully')
  //       });
  // }




  // userreview(booking: eachuserbookings, review: string) {
  //   console.log("Provider booking", booking.psid);
  //   this.userservice.getCurrentUser(this.userservice.currUser).subscribe( // get the current user using the uid from the booking
  //     user => {
  //       this.userDetails=user;
  //       const providerIndex = this.user.bookings.psid;
  //       console.log(providerIndex);

  //     },
  //     error => {
  //       console.log("Error getting current user:", error);
  //     }
  //   );
  // }










  // userreview(booking: eachuserbookings, review: string){
  //     console.log("Povider booking",booking.psid);
  //     //console.log(eachuserbookings.psid);
  //     this.userservice.getCurrentProvider(booking.psid) .subscribe( 
  //       data => { 
  //         this.providerDetails = data; 
  //         //this.providerDetails.pbookings.reviews = review;
  //         console.log(this.providerDetails.pbookings);
  //         console.log(booking.date);
  //         for(let inbooking of this.providerDetails.pbookings){ 
  //           console.log(inbooking.date); 
  //         }
  //         //console.log(this.pbookings.reviews);
  //         for(let inbooking of this.providerbookings){
  //              console.log(this.userservice.currUser);
  //         }
  //         //console.log(this.providerDetails.pbookings.uid);
  //         //console.log("Provider booking", booking);

  //         //this.userbookings=this.userDetails.bookings;
  //       },
  //       error => console.log(error) 
  //     ); 
  // }
  // userrating(){

  // }

}
