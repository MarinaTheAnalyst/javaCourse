
// 1. - створити функцію яка обчислює та повертає площу прямокутника висотою

// let square = (a,b) => a * b;
//
// console.log(square(5, 10));

// 2. створити функцію яка обчислює та повертає площу кола

    // let s = (r) => {
    //     let radius =  r**2;
    //     let square = (3.14*radius).toFixed(0);
    //     return square;
    // }
    //
    // console.log(s(6));

// 3. створити функцію яка обчислює та повертає площу циліндру

    // let squareCyl = (h, r) => {
    //     let radius = r**2;
    //     let s = (3.14 * radius * h).toFixed(0);
    //     return s;
    //
    // }
    //
    // console.log(squareCyl(2,3));

//4. створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['dinner', 'lunch', 'brekki', true];
//
//     let arr = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             console.log(array[i]);
//
//         }
//     }
//     arr(array);



//5. - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

//     let write = (text) =>  {
//         document.write(`<p>${text}</p>`);
//
// }
//
// write('word');

// 6. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     let docs = (text) => {
//     document.write(`<ul>`);
//             document.write(`<li>${text}</li>`);
//             document.write(`<li>${text}</li>`);
//             document.write(`<li>${text}</li>`);
//         document.write(`</ul>`);
//
//     }
//
//  docs('hello world!')


//7. створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
//     let list = (x, y) => {
//         document.write('<ul>');
//         for (let i = 0; i < y; i++) {
//             document.write(`<li>${x}</li>`);
//         }
//         document.write('</ul>');
//     }
//     list('hello', 3);


//8. - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let array = ['dinner', 'age', 50, true];
//
//     let arr = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             console.log(array[i]);
//
//         }
//     }
//     arr(array);


//9. - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


// let object = [{id: 25, name : 'Stepan', age:25}, {id: 10, name : 'Kira', age:10}]
//     let subject = (object) => {
//         for (const objectElement of object) {
//             document.write(`<div>${objectElement.id}, ${objectElement.name}, ${objectElement.age}</div>`);
//
//         }
//     }
//
//     subject(object);