import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from './provider';
import { PackageDetails } from './packageDetails';
interface Booking {
  spid: string;
  date: Date;
  timeSlot: string;
  psid: string;
  //uid:string;
  // val: String;
  // price: String;
} 
interface Pbooking{
  spid: string;
  date: Date;
  timeSlot: string;
  uid: string;
  reviews:string;
  rating:string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currUser !: string;
  currProvider!:string;
  spid:string='';
  rateProvider='';
  private registerUrl = 'http://localhost:8080/adduser';
  private loginUrl = 'http://localhost:8080/userlogin';
  private userdataUrl = 'http://localhost:8080/getuser';

  private providerregisterUrl = 'http://localhost:8080/addprovider';
  private providerloginUrl = 'http://localhost:8080/providerlogin';
  private providerdataUrl = 'http://localhost:8080/getproviderslist';

  private PackageDetailsUrl = 'http://localhost:8080/getpackageslist';
  private getpackagesbyid = 'http://localhost:8080/getpackagesbyid';
  fetchdocdataurl!:string;
  public fetchServicePackagesFromRemote(): Observable<any> { 
    return this.http.get(this.PackageDetailsUrl); 
  }
  public fetchServicePackagesByIdFromRemote(): Observable<any> { 
    return this.http.get(this.getpackagesbyid); 
  }
  private bookingsDetails = 'http://localhost:8080/updateBookings'

  private pbookingDetails = 'http://localhost:8080/updateProviderBookings'

  private updateRatingsAndReviews = 'http://localhost:8080/updateRatingsAndReviews'
  constructor( private http:HttpClient) { }
  public loginUserFromRemote(user: User):Observable<any>{
    return this.http.post<any>(this.loginUrl,user);
  }
  public registerUserFromRemote(user: User):Observable<any>{
    return this.http.post<any>(this.registerUrl,user);
  }
  public loginProviderFromRemote(provider: Provider):Observable<any>{
    return this.http.post<any>(this.providerloginUrl,provider);
  }
  public registerProviderFromRemote(provider: Provider):Observable<any>{
    return this.http.post<any>(this.providerregisterUrl,provider);
  }
   mrng: string[] = ["8:00 AM", "9:00 AM", "10:00 AM",
   "11:00 AM"];
 
   aft: string[] = ["12:00 PM", "2:00 PM","3:00 PM","4:00 PM"];
 
   evn: string[] = ["5:00 PM", "6:00 PM","7:00 PM"];

   getAllDetails(): Observable<User[]>
    {
      return this.http.get<User[]>(this.userdataUrl);
    }
////fetching user by id
    getCurrentUser(uid:string):Observable<User>{
      const url = `${this.loginUrl}/${uid}`;
    return this.http.get<User>(url);
    }
 //fetching provider by if
    getCurrentProvider(psid:string):Observable<Provider>{
      const url = `${this.providerloginUrl}/${psid}`;
    return this.http.get<Provider>(url);
    }
    getPackageById(spid:string):Observable<PackageDetails>
    {
      const url = `${this.getpackagesbyid}/${spid}`;
      return this.http.get<PackageDetails>(url);
    }

    postData(selectedDate: Date, Timings: string, spid: string, providerId:string)
    {
      console.log(`post data ${selectedDate},--${Timings}--service package id ${spid},--current user ${this.currUser},--provider name ${providerId}`)
      const booking:Booking = {
        spid: spid,
        date: selectedDate,
        timeSlot: Timings,
        psid:providerId
      };
      const url = `${this.bookingsDetails}/${this.currUser}`;
      return this.http.post(url,booking);
    }
    // updateUserDetail(username:string,gmail:string,address:string,phoneNo:number){
    //   const url = `${this.bookingsDetails}/${this.currUser}`; 
    //   this.currUser = this.getCurrentUser(username); 
    //   return this.http.post(url);

    // }
    postDataInProvider(selectedDate: Date, Timings: string, spid: string, userId:string, reviews:string, rating:string)
    {
      console.log(`post data ${selectedDate},--${Timings}--service package id ${spid},--current user ${this.currUser},--user name ${userId}`)
      const booking:Pbooking = {
        spid: spid,
        date: selectedDate,
        timeSlot: Timings,
        uid:userId,
        reviews:reviews,
        rating:rating
      };
      const purl=`${this.pbookingDetails}/${this.currProvider}`;
      return this.http.post(purl,booking);
    }

    //posting reviews
    postUserReviewInProvider(selectedDate: Date, Timings: string, spid: string, userId:string, reviews:string, rating:string){
      console.log(`post data ${selectedDate},--${Timings}--service package id ${spid},--current user ${reviews},--user name ${rating}`)
      const booking:Pbooking = {
        spid: spid,
        date: selectedDate,
        timeSlot: Timings,
        uid:userId,
        reviews:reviews,
        rating:rating
      };
      const purl=`${this.updateRatingsAndReviews}/${this.rateProvider}`;
      return this.http.post(purl,booking);
    }
    // getUserBookings(userId: string) {
    //   return this.http.get(`${this.userdataUrl}${this.currUser}`);
    // }
    getAllProviderDetails(): Observable<Provider[]>
    {
      return this.http.get<Provider[]>(this.providerdataUrl);
    }
}
