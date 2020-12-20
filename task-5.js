'use strict'

//==============================task-1============================================

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };
//
// Account.prototype.getInfo = function () {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// }

// console.log(Account.prototype.getInfo); // function
//
// const mango = new Account('Mangozedog','mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//
// const poly = new Account('Poly','poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//==============================task-2============================================

// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//
//     getInfo(name, age, followers) {
//         console.log(`User ${name} is ${age} years old and has ${followers}`);
//     }
// }

// const mango = new User('Mango', 2, 20);
// mango.getInfo('Mango', 2, 20); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });
// poly.getInfo('Poly', 3, 17); // User Poly is 3 years old and has 17 followers

//==============================task-3============================================

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//
//     getItems() {
//         return this.items;
//     }
//
//     addItem(item) {
//         this.items.push(item);
//     }
//
//     removeItem(item) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items.includes(item)) {
//                 this.items.splice(i, 1);
//             }
//         }
//     }
// }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//==============================task-4============================================

// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//
//     get value () {
//         return this._value;
//     }
//
//     append(str) {
//         return this._value + str;
//     }
//
//     prepend(str) {
//         return this._value = str + this._value;
//     }
//
//     pad(str) {
//         return this._value = str + this._value + str;
//     }
// }

// const builder = new StringBuilder('.');
//
// builder.append('^');
// console.log(builder.value); // '.^'
//
// builder.prepend('^');
// console.log(builder.value); // '^.^'
//
// builder.pad('=');
// console.log(builder.value); // '=^.^='

//==============================task-5============================================

class Car {

    static getSpecs(car) {
        return console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, 
        distance: ${car._distance}, price: ${car._price}`);
    }

    constructor({speed, price, maxSpeed, isOn, distance}) {
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        return this._price = newPrice;
    }

    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

    accelerate(value) {
        // if (this._speed + value < this._maxSpeed) {
        //     this._speed += value;
        // }

        const newSpeed = this._speed + value;
        this._speed = newSpeed < this._maxSpeed ? newSpeed : this._maxSpeed;
    }

    decelerate(value) {
        // if (this._speed - value > 0) {
        //     this._speed -= value;
        // }

        const newSpeed = this._speed - value;
        this._speed = newSpeed > 0 ? newSpeed : 0;
    }

    drive(hours) {
        if(this._isOn) {
            this._distance = hours * this._speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
//
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
