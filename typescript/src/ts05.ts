class Person{
    name:String="";
}

const john = new Person();
john.name="John"
console.log(john)

class Student{
    private stname:string;
    public constructor(name:string){
this.stname=name;
    }
    getname():string{

        return  this.stname;
    }
}


const student=new Student("Salena");
console.log(student)