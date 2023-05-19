export interface medicinesdataformat{
    name:string,
    category:string,
    price:number,
    used:string,
    id?:string,
    img?:string,
    expirydate:Date,
    quantity:number,
    status:string
}

export interface usersdata{
    id?:number,
    name:string,
    email:string,
    age:number,
    password:string,
    phone:number
}


