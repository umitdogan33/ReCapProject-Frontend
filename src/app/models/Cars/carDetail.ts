import { CarImage } from "../CarImage";

export interface CarDetail{
    id:number,
    carName:string,
    modelYear:number,
    carId:number,
    brandId:number,
    colorId:number,
    brandName:string,
    colorName:string,
    dailyPrice:number,
    description:string,
    images:string[]
}