"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
const john = new Person();
john.name = "John";
console.log(john);
class Student {
    constructor(name) {
        this.stname = name;
    }
    getname() {
        return this.stname;
    }
}
const student = new Student("Salena");
console.log(student);
