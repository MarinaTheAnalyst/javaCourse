//                              1. --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


//  let x = [1, 2, 3, 4, 5];
//     for (let cell of x) {
//         console.log(cell)
//     }
//
// let y = ['pineapple', 'mellon', 'watermelon', 'apple', 'orange'];
//     for (let cell of y) {
//         console.log(cell)
//     }
//
//
// let t = [true, 1.5, 2, 'word', 4];
//     for (let cell of t) {
//         console.log(cell)
//     }


// 2.Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'true';
// arr[1] = 3;
// arr[2] = true;
// arr[3] = 220;
// console.log(arr);

//3.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//     for (let i = 0; i < 10; i++) {
//         document.write(`<div>output</div>`);
//     }

//3.2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${'true'} input </div>`);
// }
// 3.3 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     let i = 0;
//     while (i<20) {
//         document.write(`<h1>okten school</h1>`);
//         i++;
//     }
// 3.4 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     let j = 0;
//     while (j<20) {
//         document.write(`<h1>okten school - ${'cool'}</h1>`);
//         j++;
//     }

// 4.1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//
// }

// 4.2 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let y = ['pineapple', 'mellon', 'watermelon', 'apple', 'orange', 'strawberry', 'berries', 'cranberry', 'lemon', 'wildberries'];
//     for ( i = 0; i < y.length; i++) {
//         console.log(y[i]);
//     }


// 4.3 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let t = [true, 1.5, 2, 'word', 4, 'pineapple', 'mellon', 'watermelon', 'apple', 'orange'];
//     for ( i = 0; i < t.length; i++) {
//         console.log(t[i]);
//     }


//     4.4  Створити масив з 10 елементів числового, стірчкового і булевого типу.
//За допомогою if та typeof вивести тільки булеві елементи

    // let arr = [true, 'word', 'product', false, 2+2, '2', 3, 5, 10, 'true'];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (typeof arr[i] === 'boolean') {
    //             console.log(arr[i]);
    //         }
    //     }



// 4.5 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [true, 'word', 'product', false, 2, '2', 3, 5, 10, 'true'];
//     for(let j = 0; j < arr.length; j++) {
//         if (typeof arr[j] === "number") {
//             console.log(arr[j]);
//         }
//     }


// 4.6 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//     let arr = [true, 'word', 'product', false, 2, '2', 3, 5, 10, 'true'];
//     for(let k = 0; k < arr.length; k++) {
//         if (typeof arr[k] === "string") {
//             console.log(arr[k]);
//         }
//     }

// 5.1 - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'true';
// arr[1] = 3;
// arr[2] = true;
// arr[3] = false;
// arr[4] = 'word';
// arr[5] = 'index';
// arr[6] = 220;
// arr[7] = 'product';
// arr[8] = 220;
// arr[9] = 220;
// arr[10] = 220;
//
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr[10]);
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }


// 5.2 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }
// 5.3- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }
// 5.4 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }
// 5.5 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i+=2) {
//    if(i % 2 === 0) {
//        console.log(i);
//        document.write(`<div>${i}</div>`);
//    }
// }
// 5.6 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i+=2) {
//    if(i % 2 === 1) {
//        console.log(i);
//        document.write(`<div>${i}</div>`);
//    }
// }