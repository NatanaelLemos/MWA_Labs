/*
Re-write the following code using TypeScript and Class Features 
*/

class BaseObject {
    width: number;
    length: number;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;

console.log(rectangle.calcSize()); // 10 