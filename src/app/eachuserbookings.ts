import { PackageDetails } from "./packageDetails";
import { Provider } from "./provider";

export class eachuserbookings{
    spid: string;
  date: Date;
  timeSlot: string;
  psid: string;
  packageDetails: PackageDetails;
  provider:Provider;

  constructor(spid: string, date: Date, timeSlot: string, psid: string, packageDetails: PackageDetails, provider:Provider) {
    this.spid = spid;
    this.date = date;
    this.timeSlot = timeSlot;
    this.psid = psid;
    this.packageDetails = packageDetails;
    this.provider = provider;
  }
}