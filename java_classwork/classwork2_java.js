
//1. - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

    // let x = +prompt('Enter any number');
    // let b = +prompt('Enter any number');
    //     if (x>b) {
    //         console.log(x);
    //     } else if (x===b) {
    //         console.log(x + ' - ' + 'They are equal');
    //     } else {
    //         console.log(b)
    //     }

//2.  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

    // let output = +prompt('Enter your flat number');
    // if (output >= 1 && output <= 20) {
    //     console.log('First entrance');
    // } else if (output >= 21 && output <= 48) {
    //     console.log('Second entrance');
    // } else if (output >= 49 && output <= 90) {
    //     console.log('Third entrance');
    // } else {
    //     console.log('Bollocks')
    // }

//3. Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

    // let number = +prompt('Enter your preferable number')
    //     if(number === 10) {
    //         console.log('Correct')
    //     } else {
    //         console.log('Ponder longer')
    //     }
//4.Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x;
// // x=1;
// // x='index';
// // x= true;
// // x = [1, 2, 3];
//
//         if (typeof x === "number") {
//             console.log(1);
//         } else if (typeof x === "string") {
//             console.log(2);
//         } else if (typeof x === "boolean") {
//             console.log(3);
//         } else if (typeof x === "object") {
//             console.log(3);
//         } else {
//             console.log(typeof `${x}`);
//         }

//5. - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

    // let temp = +prompt('How many degrees outdoors?')
    //     if (temp >= 10 && temp <=22) {
    //         console.log('ми йдемо ВЧИТИСЯ ')
    //     } else {
    //         console.log('сидимо вдома і вчимося ОНЛАЙН')
    //     }
//6.  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д )
// і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//     let lottery = +prompt('Enter your number')
//         switch (lottery) {
//             case 1:
//                 console.log('Vehicle');
//                 break;
//             case 2:
//                 console.log('Phone');
//                 break;
//             case 3:
//                 console.log('Laptop');
//                 break;
//             case 4:
//                 console.log('Earbuds');
//                 break;
//             case 5:
//                 console.log('iWatch');
//             default:
//                 console.log('It is not your day today');
//         }        