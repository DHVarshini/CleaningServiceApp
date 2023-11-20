export class PackageDetails{
    spid!:number;
    name!:string;
    desc!:desc;
    price!:price;
    val!:string;
    constructor(){}
}
interface desc{
    FloorCleaning:string;
    KitchenCleaning:string;
    BathroomCleaning:string;
}
interface price{
    residential:number,
    commercial:number,
    specialized:number
}