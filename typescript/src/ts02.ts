const names: string[]=[];
names.push("obj1");
names.push("obj2");

console.log(names);

const numbers=[11,21,35,34,76];
numbers.push(78);
//numbers.push("hi");

console.log(numbers);

const [val1, val2,val3] =numbers;
console.log(val1);
console.log(val2);

let tuple:[number,string,boolean];
tuple=[1,"Sindhuja",true];
//tuple=[3,false,"Chaitu"]
console.log(tuple);