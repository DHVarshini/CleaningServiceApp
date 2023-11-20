import { Provider } from "@angular/core";

export class User{
    id!:number;
    uid!:String;
    gmail!:string;
    username!:string;
    phoneNo!:number;
    address!:string;
    password!:string;
    bookings!:Bookings;
    Provider!:Provider;
    constructor(){}
}
interface Bookings{
    spid: string;
    date: Date;
    timeSlot: string;
    psid: string;
}