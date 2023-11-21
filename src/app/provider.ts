import { User } from "./user";

export class Provider{
    pid!:number;
    psid!:string;
    pgmail!:string;
    pusername!:string;
    pphoneNo!:number;
    paddress!:string;
    ppassword!:string;
    pbookings: Bookings[] = [];
    User!:User;
    constructor(){}
}
interface Bookings{
    spid: string;
    date: Date;
    timeSlot: string;
    psid: string;
    reviews:string;
    rating:string;
}