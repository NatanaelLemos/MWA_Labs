/*
Re-write the following code using TypeScript and Class Features 
*/

class Person {
    private _firstName: string;
    public get firstName() { return this._firstName; }
    public set firstName(val) { this._firstName = val.toUpperCase(); }
}


var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName); // ASAAD 

