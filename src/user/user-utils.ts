import {Entity} from "@/utils";

type UserType = 'ADMIN'|'CONSULTIVE'

export interface User extends Entity{
    name:string;
    firstName:string;
    email:string;
    phone:string;
    type:UserType;
}
