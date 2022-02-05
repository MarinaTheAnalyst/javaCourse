//1. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//     let time = prompt('enter your number between 0 and 59');
//     if (time >= 0 && time <= 14) {
//         console.log('first');
//     } else if (time >= 15 && time <= 30) {
//         console.log('second')
//     } else if (time >= 31 && time <= 45) {
//         console.log('third')
//     } else if (time >= 46 && time <= 59) {
//         console.log('forth')
//     } else {
//         console.log('does not match a requirement')
//     }

// 2. У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    // let day = prompt ('provide the date of the month meaning from 1 to 31');
    // if (day >=1 && day <= 10) {
    //     console.log('Beginning of the month')
    // } else if (day >=11 && day <= 20) {
    //     console.log("You're almost there, bear with the middle of the month")
    // } else if (day >=21 && day <= 31) {
    //     console.log('Finally pay check')
    // } else {
    //     console.log('are you sure you got the question?')
    // }

// 3. У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// debugger;
// let test = ' ';
//     if (test !== false) {
//         console.log('Correct')
//     } else {
//         console.log('Incorrect')
//     }

// let test = confirm(' ')
// console.log(test)

// let value = true;
//     if (confirm(' ')) {
//         value = 'Correct';
//     } else {
//         value = 'Incorrect';
//     }
//  console.log(value);
// ------------------тернаркa----------------------------------------
// (test !== ' ') ? console.log('Correct') : console.log('Incorrect');
let value = confirm(' ') ? 'Correct' : 'Incorrect';
console.log(value);




// 4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

    // let a = +prompt('Enter number');
    // if (a !== 0) {
    //     console.log('Correct')
    // } else {
    //     console.log('Incorrect')
    // }

//5. Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

    // let day = +prompt('Enter day of the week integer')
    // switch (day) {
    //     case 1:
    //         console.log('Doing yoga');
    //         break;
    //     case 2:
    //         console.log('Going on a stroll');
    //         break
    //      case 3:
    //             console.log('Watching Netflix');
    //             break
    //     case 4:
    //             console.log('Tidying room');
    //             break
    //     case 5:
    //             console.log('Preparing food');
    //             break
    //     case 6:
    //             console.log('Going on an exhibition');
    //             break
    //     case 7:
    //             console.log('Going on a stroll');
    //             break
    //     default:
    //         console.log ('Does not match a requirement')
    //     }


// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

    // let year = +prompt('How many days in this year');
    // if (year % 4 === 0) {
    //     console.log('Pass')
    // } else {
    //     console.log('Failed')
    // }
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

    let officialName = prompt('Яка «офіційна» назва JavaScript?');
    if (officialName === 'ECMAScript') {
        console.log('Правильно!')
    } else {
        console.log('Не знаєте? ECMAScript!')
    }