import { PackageDetails } from "./packageDetails";
import { User } from "./user";
export class eachproviderbookings {
  spid: string;
  date: Date;
  timeSlot: string;
  uid: string;
  packageDetails: PackageDetails;
  user: User;
  reviews: string;
  rating: string;

  constructor(spid: string, date: Date, timeSlot: string, uid: string, packageDetails: PackageDetails, user: User, reviews: string, rating: string) {
    this.spid = spid;
    this.date = date;
    this.timeSlot = timeSlot;
    this.uid = uid;
    this.packageDetails = packageDetails;
    this.user = user;
    this.reviews = reviews;
    this.rating = rating;
  }
}