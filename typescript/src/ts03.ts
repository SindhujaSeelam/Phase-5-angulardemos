const car :{make: string; model:string}={
    make:"Toyota",
    model:"Innova"
};

console.log(car);

// const house ={
//     type : 
// }

interface ICar{
    make :string;
    model:string;
};

const icar1 :ICar={

    make:"Ford",
    model:"Figo",
    
}

console.log(icar1)


interface ICar2 extends ICar{
    price:number
}

const icar2 :ICar2={

    make:"Ford",
    model:"Figo",
    price:3400
}

    console.log(icar2)

    