//Re-write the following code using TypeScript and Class Features 

class Car {
    private _name: string;
    private _acceleration: number;

    public get name() {
        return this._name;
    }

    public set name(val){
        this._name = val;
        this._acceleration = 0;
    }

    public get acceleration(){
        return this._acceleration;
    }

    constructor(name: string){
        this.name = name;
    }

    honk(){
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }

    accelerate(speed: number){
        this._acceleration += speed;
    }
}

var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot! 
console.log(car.acceleration); // 0 
car.accelerate(60);
console.log(car.acceleration); // 60 
