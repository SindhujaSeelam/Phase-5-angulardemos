export interface itemdata{
    name:string,
    category:string,
    price:number,
    weight:string,
    id?:string,
    img:string
}

export interface userdata{
    firstname:string,
    lastname:string,
    phone:number,
    address:string,
    itemid?:number
}

export interface admin{
    name:string,
    password:string
}