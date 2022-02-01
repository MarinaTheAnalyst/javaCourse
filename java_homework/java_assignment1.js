
// for own purpose - to comment press cmd /
// 1 task// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false//+ alert, document, console

let phrase= 'hello';
let school = 'owu';
let ending = 'com';
let country = 'ua';


console.log(phrase, school, country, ending);


// alert(phrase);
// alert(school);
// alert(country);


let float = ['3.14', '2.7']
    numbersFloat = float.map(Number);
console.log(numbersFloat);

document.write(phrase + ' ' + school + ' ' + country + ' ' + ending + ' ' + numbersFloat);

//alert(numbers);


let digits = [1, 10, 999, 123, 16];
    console.log(digits);

let boolean = ['true', 'false'];
    console.log(boolean);

document.write(boolean + ' ' + digits);
// alert(boolean);


// 2 task --> кожній змінній з завдання значення на довільне

let word = phrase;
    console.log(word);

let course = school;
    console.log(course);

let website = ending;
    console.log(website);

let count = country;
    console.log(count);

document.write(word + ' ' + course + ' ' +  website + ' ' + count);
// alert('This is a solid phrase to stop' + ' ' + word);
// alert('This is a solid phrase to work on' + ' ' + course);
// alert('This is a solid phrase to visit' + ' ' + website);
// alert('This is a solid phrase to enjoy' + ' ' + country);

//3 3 слова які являються вашими Імям, По-Батькові та роками.
// let firstName = 'Marina';
// let secondName = 'Gontar';
// let dateOf = 1997;
//
// let cohort = firstName + ' ' + secondName + ' ' + dateOf;
// console.log(cohort);
//
// let person = {
//     name: 'Marina',
//     surname: 'Gontar',
//     date: 1997
//
// }
//
// console.log(person.name);
// console.log(person.surname);
// console.log(person.date);


// prompt(person.name);
// prompt(person.surname);
// prompt(person.date)
//
// prompt("Вітаю" + ' ' + person.name + ' ' + person.surname + ' ' + "Тобі" + ' ' + 24 + ' ' + 'роки');

let name = prompt('Marina');
let surname = prompt('Gontar');
let age = prompt('24');

let output = prompt(name + ' ' + surname + ' ' + age);
console.log(output);

// 4 task/let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// 5 task boolean type:
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false

let x = 5;
let y = 6;

console.log(x<y);
console.log(x>y);
console.log(x===y);
console.log(x>=y);

// 5 task boolean type:
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false

let d = 10;
let e = 10;

console.log(d===e);
console.log(d>=e);
console.log(d!==e);
console.log(d>e);
console.log(d<e);


// 5 task boolean type:
// 123 ? '123' -> false
//  123 ? '123' -> true

let o = 123;
let r = 123;

console.log(o!==r);
console.log(o===r);
