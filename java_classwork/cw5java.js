// 1. - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    // let somefun = (a,b,c) => {
    //     if(a<b && a<c){
    //         console.log(a);
    //     }else if( b <a && b <c){
    //         console.log(b);
    //     } else {
    //         console.log(c);
    //     }
    // }
    //
    // somefun(5, 10, 12);


// 2. - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const somefun = (a,b,c) => {
//     if(a>b && a>c){
//         console.log(a);
//     }else if( b>a && b>c){
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// somefun(5, 10, 12);


// 3. створити функцію яка повертає найбільше число з масиву
// let arrayMix = [5, 10, 12];
//     let arr = (array) => {
//         let max = array[0];
//         for (let i of array) {
//             if (i > max) {
//                 max = i}
//
//
//         }
//         return max;
//     }
//
// console.log(arr(arrayMix));

// 4. - створити функцію яка повертає найменьше число з масиву

// let arrayMix = [5, 10, 12];
//     let arr = (array) => {
//         let min = array[0];
//         for (let i of array) {
//             if (i < min) {
//                 min = i}
//
//
//         }
//         return min;
//     }
//
// console.log(arr(arrayMix));


// 5. - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayMix = [5, 10, 12];
//     let arrAdd = ([a, b, c]) => {
//         let add = a + b + c;
//             return add;
//
// }
//
// console.log(arrAdd(arrayMix));
//

// 6. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    // let arrayMix = [5, 10, 12];
    //     let arrAdd = (array) => {
    //         let sum = 0
    //         for (const j of array) {
    //            sum = j + sum;
    //
    //         }
    //         return sum/array.length;
    // }
    //
    // console.log(arrAdd(arrayMix));


// 7. - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    // let input = (...asd) => {
    //     let min = asd[0];
    //     let max = asd[0];
    //     for (const j of asd) {
    //         if (j > max){
    //             max = j;
    //         } if (j < min){
    //         min = j;}
    //
    //         }
    //     console.log(max);
    //     return min;
    //     }
    //
    //
    // console.log(input(1,2,3));

// 8. - створити функцію яка заповнює масив рандомними числами +
// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

//
//     let output = (len, limit) => {
//         let array = [];
//         for (let i = 0; i < len; i++)
//         {
//             array.push(Math.round(Math.random() * limit));
//
//         }
//
//         return array;
//     }
// console.log(output(25,100));

//10. - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1 ,2 ,3];
//     let output = (arr) => {
//         let newArr = [];
//         for (let i = array.length - 1, ar=0; i >= 0; i--, ar++) {
//             newArr[ar] = arr[i];
//         }
//         return newArr;
//     }
//
//     console.log(output(array));