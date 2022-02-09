// 1. - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square() {
//     let a = 20;
//     let b = 20;
//     return a * b;
// }

function square(a, b) {
    return a * b;
}

console.log(square(5,10));

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareRadius(r) {
//     let radius = r**2;
//     let s = 3.14 * radius;
//     return s;
//
// }
//
// console.log(squareRadius(3));

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

 // function cylinder(h ,r) {
 //     let radius = r ** 2;
 //     let s = (3.14 * radius * h).toFixed(0);
 //     return s;
 // }
 //
 // console.log(cylinder(3, 5));

//4. створити функцію яка приймає масив та виводить кожен його елемент

// function arrMaker(arrayData) {
//     for (let i = 0; i < arrayData.length; i++) {
//         console.log(arrayData[i]);
//
//     }
// }
//
// arrMaker(['dinner', 'lunch', 'brekki', true]);



// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
//  function pText(text){
//      document.write(`<p>${text}</p>`);
//  }
//
// pText('hello');

 //6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(a) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</ul>');
// }
//
// list('time');

//7. створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function list(a, b) {
//     document.write('<ul>');
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${a}</li>`);
//     }
//     document.write('</ul>');
// }
// list('time', 3);

//8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrMaker(a, b, c, d) {
//     let arr = [a, b, c, d];
//     return arr;
//
// }
//
// let array = arrMaker('dinner', 'lunch', 'brekki', true);
// console.log(array);
//
// let instance = arrMaker('word', false, 123, 57);
// console.log(instance);

// --------------------------------------
// function arrMaker(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//
//     }
// }
//
// let array = ['dinner', 'lunch', 'brekkie', true];
// arrMaker(array);

//9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

//     function creator (arr) {
//         for (const arrElement of arr) {
//             document.write(`<div>${arrElement.id}, ${arrElement.name}, ${arrElement.age}</div>`);
//         }
//
//     }
//
// let array = [{id:7, name:'Taras', age:23},{id:8, name:'Ivan', age:23},{id:9, name:'Yura', age:23}];
//     creator(array);