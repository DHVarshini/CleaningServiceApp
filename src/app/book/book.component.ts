import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { PackageDetails } from '../packageDetails';
import { Provider } from '../provider';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  PackageDetails!: PackageDetails;
  Provider: Provider[] = [];
  ProviderDetails!: Provider;
  providerId!: string;
  userId!: string;

  selectedDate!: Date;
  timings!: string;
  val!: string;
  uid!: string;
  psid!: string;
  price!: number;
  public docdata: any;
  selectedProvider!: Provider;
  type!: string;

  selectedMorningTiming!: string;
  selectednoonTiming!: string;
  selectedevgTiming!: string;
  selectedTiming!: string;
  reviews!: string;
  rating!: string;

  constructor(public userService: UserService, private actroute: ActivatedRoute, private dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public details: any) {
    userService.getPackageById(details.val).subscribe((data) => {
      this.val = details.val;
      this.docdata = data;
      console.log(this.docdata);
    }
    );
    this.userService.getPackageById(details['val']).subscribe((data) => {
      this.PackageDetails = data;
    });
  }
  selectedDetails() {

    let price;
    if (this.type === 'residential') {
      price = this.PackageDetails.price.residential;
    } else if (this.type === 'commercial') {
      price = this.PackageDetails.price.commercial;
    } else if (this.type === 'specialized') {
      price = this.PackageDetails.price.specialized;
    }
    console.log("Selected Date: ", this.selectedDate);
    console.log("Selected Timing: ", this.selectedTiming);
    console.log("Selected provider type: ", this.selectedProvider?.psid)
    this.providerId = this.selectedProvider?.psid;
    this.userId = this.userService.currUser;
    console.log("User: ", this.userId);
    this.actroute.params.subscribe(params => {
      this.userService.currProvider = this.selectedProvider?.psid;
    });
    console.log("Particular Provider: ", this.userService.currProvider);

    this.userService.postData(this.selectedDate, this.selectedTiming, this.val, this.providerId).subscribe(
      (response) => {
        window.alert('Are you sure you want to confirm the bookings')
      });

    this.userService.postDataInProvider(this.selectedDate, this.selectedTiming, this.val, this.userId, this.reviews, this.rating).subscribe(
      (response) => {
        window.alert('Booking created successfully')
      });

    this.selectedDate = new Date();
    this.timings = "";
    this.selectedMorningTiming = "";
    this.selectednoonTiming = "";
    this.selectedevgTiming = "";
    this.reviews = "";
    this.rating = "";
  }
  ngOnInit(): void {
    this.fetchPackageDetails();
    this.getAllProviderDetails();
  }

  fetchPackageDetails() {
    this.userService.fetchServicePackagesByIdFromRemote().subscribe(
      data => {
        this.PackageDetails = data;
      },
      error => console.log(error));
  }
  getAllProviderDetails() {
    this.userService.getAllProviderDetails().subscribe(
      data => {
        this.Provider = data;
      },
      error => console.log(error));
  }


}
