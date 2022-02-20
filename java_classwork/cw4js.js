//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function all(a, b, c) {
//     if(a<b && a<c){
//         return a;
//     }
//     else if (b<a && b<c){
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// console.log(all(55, 100, 16));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function all(a, b, c) {
//     if(a>b && a>c){
//         return a;
//     }
//     else if (b>a && b>c){
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// console.log(all(55, 100, 16));

// // - створити функцію яка повертає найбільше число з масиву
// let array = [1, 2, 3, 4, 25];
//
// let check = (arr) =>{
//     let max = arr[0];
//     for (let arrElement of arr) {
//         if(arrElement > max){
//             max = arrElement;
//         }
//
//     } return max;
//
// }
// console.log(check(array));

// - створити функцію яка повертає найменьше число з масиву

// let array = [1, 2, 3, 4, 25];
//
// let check = (arr) =>{
//     let min = arr[0];
//     for (let arrElement of arr) {
//         if(arrElement < min){
//             min = arrElement;
//         }
//
//     } return min;
//
// }
// console.log(check(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 2, 10];
// function arr(arguments) {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum = arguments[i] + sum;
//
//     }
//     return sum;
//
// }
// console.log(arr(array));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1, 2, 10];
// function arr(arguments) {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum = arguments[i] + sum;
//
//     }
//     return sum/arguments.length;
//
// }
// console.log(arr(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [1, 2, 3, 4, 25];
//
// function check (arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let arrElement of arr)
//     {
//         if (arrElement > max) {
//         max = arrElement;
//     }
//     if(arrElement < min){
//             min = arrElement;
//
//         }
//
//     }
//     console.log(max);
//     return min;
// }
// console.log(check(array));

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function output(len){
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         arr.push(Math.floor(Math.random()*100));
//
//     }
//     return arr;
//
// }
// console.log(output(15));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function output(len, limit){
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         arr.push(Math.floor(Math.random()*limit));
//
//     }
//     return arr;
//
// }
// console.log(output(15, 100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse(arr) {
//     let arr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }
//
// let array = [1, 2, 3, 4, 5];
// console.log(reverse(array));