/*
Re-write the following code using TypeScript and Class Features
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (val) { this._firstName = val.toUpperCase(); },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName); // ASAAD 
