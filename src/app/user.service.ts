import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from './provider';
import { PackageDetails } from './packageDetails';
interface Booking {
  spid: string;
  date: Date;
  timeSlot: string;
  psid: string;
}
interface Pbooking {
  spid: string;
  date: Date;
  timeSlot: string;
  uid: string;
  reviews: string;
  rating: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currUser !: string;
  currProvider!: string;
  spid: string = '';
  rateProvider = '';
  constructor(private http: HttpClient) { }
  private registerUrl = 'http://localhost:8080/adduser';
  private loginUrl = 'http://localhost:8080/userlogin';
  private userdataUrl = 'http://localhost:8080/getuser';

  private providerregisterUrl = 'http://localhost:8080/addprovider';
  private providerloginUrl = 'http://localhost:8080/providerlogin';
  private providerdataUrl = 'http://localhost:8080/getproviderslist';

  private PackageDetailsUrl = 'http://localhost:8080/getpackageslist';
  private getpackagesbyid = 'http://localhost:8080/getpackagesbyid';

  private bookingsDetails = 'http://localhost:8080/updateBookings'

  private pbookingDetails = 'http://localhost:8080/updateProviderBookings'

  private updateRatingsAndReviews = 'http://localhost:8080/updateRatingsAndReviews'

  //User registration
  registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
  //User login
  loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
  //All users
  getAllDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.userdataUrl);
  }
  //fetching details of particular user by id
  getCurrentUser(uid: string): Observable<User> {
    const url = `${this.loginUrl}/${uid}`;
    return this.http.get<User>(url);
  }

  //Provider registration
  registerProviderFromRemote(provider: Provider): Observable<any> {
    return this.http.post<any>(this.providerregisterUrl, provider);
  }
  //Provider login
  loginProviderFromRemote(provider: Provider): Observable<any> {
    return this.http.post<any>(this.providerloginUrl, provider);
  }
  //All providers
  getAllProviderDetails(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.providerdataUrl);
  }
  //fetching details of particular provider by id
  getCurrentProvider(psid: string): Observable<Provider> {
    const url = `${this.providerloginUrl}/${psid}`;
    return this.http.get<Provider>(url);
  }

  //fetches entire package list
  fetchServicePackagesFromRemote(): Observable<any> {
    return this.http.get(this.PackageDetailsUrl);
  }
  //fetches a particular package by id
  getPackageById(spid: string): Observable<PackageDetails> {
    const url = `${this.getpackagesbyid}/${spid}`;
    return this.http.get<PackageDetails>(url);
  }
  
  mrng: string[] = ["8:00 AM", "9:00 AM", "10:00 AM",
    "11:00 AM"];
  aft: string[] = ["12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
  evn: string[] = ["5:00 PM", "6:00 PM", "7:00 PM"];
  //Updating booking details in provider
  postData(selectedDate: Date, Timings: string, spid: string, providerId: string) {
    console.log(`selected date ${selectedDate},--selected timing ${Timings}--service package id ${spid},--current user ${this.currUser},--provider name ${providerId}`)
    const booking: Booking = {
      spid: spid,
      date: selectedDate,
      timeSlot: Timings,
      psid: providerId
    };
    const url = `${this.bookingsDetails}/${this.currUser}`;
    return this.http.post(url, booking);
  }

  //Updating booking details in provider
  postDataInProvider(selectedDate: Date, Timings: string, spid: string, userId: string, reviews: string, rating: string) {
    console.log(`selected date ${selectedDate},--selected timing ${Timings}--service package id ${spid},--current user ${this.currUser},--user name ${userId}`)
    const booking: Pbooking = {
      spid: spid,
      date: selectedDate,
      timeSlot: Timings,
      uid: userId,
      reviews: reviews,
      rating: rating
    };
    const purl = `${this.pbookingDetails}/${this.currProvider}`;
    return this.http.post(purl, booking);
  }

  //Updating reviews and rating in provider
  postUserReviewInProvider(selectedDate: Date, Timings: string, spid: string, userId: string, reviews: string, rating: string) {
    console.log(`rating given ${reviews},--review given ${rating}`)
    const booking: Pbooking = {
      spid: spid,
      date: selectedDate,
      timeSlot: Timings,
      uid: userId,
      reviews: reviews,
      rating: rating
    };
    const purl = `${this.updateRatingsAndReviews}/${this.rateProvider}`;
    return this.http.post(purl, booking);
  }
}
