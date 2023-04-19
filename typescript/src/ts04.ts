function getTime():number{
    return new Date().getTime()
}

console.log(getTime());


function greet(){
    console.log("Hello Welcome to Void Function...")
}

greet();

function multiply(a:number,b:number):number{
    return a*b;
}

console.log(multiply(2,3));

function add(a:number,b:number,c?:number){
return a+b+(c||0);
}
console.log(add(6,7));

function exp(a:number,b:number=2){
    return a**b;
    }
    console.log(exp(6,9));