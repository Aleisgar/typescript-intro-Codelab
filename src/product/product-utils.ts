import {Entity} from "@/utils";


export interface Product extends Entity{
    name:string;
    category:Category;
    price:number;
}
type Category= 'food'|'clothes'|'toy'
