//Re-write the following code using TypeScript and Class Features 
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
            this._acceleration = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this._acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot! 
console.log(car.acceleration); // 0 
car.accelerate(60);
console.log(car.acceleration); // 60 
