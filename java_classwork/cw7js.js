//1.- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    // function Car (model, manufacturer, year, maxSpeed, vMotor) {
    //     this.model = model;
    //     this.manufacturer = manufacturer;
    //     this.year = year;
    //     this.maxSpeed = maxSpeed;
    //     this.vMotor = vMotor;
    //     this.drive = function () {
    //                 console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    //             };
    //     this.info = function () {
    //         for (let argument in this) {
    //             if (typeof this[argument] !== 'function') console.log(`${argument} - ${this[argument]}`)
    //
    //         }
    //     };
    //     this.increaseMaxSpeed = function (newSpeed) {
    //         this.maxSpeed = this.maxSpeed + newSpeed;
    //     };
    //     this.changeYear = function (newValue) {
    //         this.year = newValue;
    //     };
    //
    //     this.addDrive = function (driver) {
    //         this.driver = driver;
    //     };
    //
    // }

// let car1 = new Car('Toyota Albi', 'Toyota', 2002, 320, 34);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(350);
// car1.changeYear(2005);
// car1.addDrive('Lorry');
// console.log(car1);






// 2.- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, manufacturer, year, maxSpeed, vMotor)
//     {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.vMotor = vMotor; }
//
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//         }
//         info () {
//             for (let argument in this) {
//                 if (typeof this[argument] !== 'function') console.log(`${argument} - ${this[argument]}`)
//
//             }
//         };
//        increaseMaxSpeed (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//         };
//         changeYear (newValue) {
//             this.year = newValue;
//         };
//
//         addDrive (driver) {
//             this.driver = driver;
//         };
//
// }
//
// let car1 = new Car('Toyota Albi', 'Toyota', 2002, 320, 34);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(350);
// car1.changeYear(2005);
// car1.addDrive('Lorry');
// console.log(car1);

//3.-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
 }

 let cinderella = [
     new Cinderella('Melissa', 23, 35),
     new Cinderella('Melissa', 23, 40),
     new Cinderella('Melissa', 23, 34),
     new Cinderella('Melissa', 23, 36),
     new Cinderella('Melissa', 23, 38.5),
     new Cinderella('Melissa', 23, 35.5),
     new Cinderella('Melissa', 23, 36),
     new Cinderella('Melissa', 23, 38),
     new Cinderella('Melissa', 23, 35),
     new Cinderella('Melissa', 23, 35),
 ]

console.log(cinderella);

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince('Dan', 25, 36);
console.log(prince);

    let findObject = (cinderella, prince) => {
        for (let cinderellaElement of cinderella) {
            if (cinderellaElement.shoeSize === prince.foundShoe){
              return cinderellaElement;
        }

    }
}

console.log(findObject(cinderella, prince));
    let verify = cinderella.find((element) => element.shoeSize === prince.foundShoe);
    console.log(verify);

