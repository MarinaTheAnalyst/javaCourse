
//1. - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world';
// console.log(string.length);
//
// let string2 = 'lorem ipsum';
// console.log(string2.length);
//
// let string3 = 'javascript is cool';
// console.log(string3.length);

//2. - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world';
// console.log(string.toUpperCase());

// let string2 = 'lorem ipsum';
// console.log(string2.toUpperCase());

// let string3 = 'javascript is cool';
// console.log(string3.toUpperCase());


// 3. - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string = 'hello world';
// let upper = string.toUpperCase();
// console.log(upper.toLowerCase());

// let string = 'lorem ipsum';
// let upper = string.toUpperCase();
// console.log(upper.toLowerCase());
//
// let string = 'javascript is cool';
// let upper = string.toUpperCase();
// console.log(upper.toLowerCase());


// 4. - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//     let str = ' dirty string   ' ;
//     let trim = str.trim();
//     // let trim = str.trim().replace(' ', '');
//     console.log(trim);

 //5. - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => str.split(' ');
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

    // let str = 'Каждый охотник желает знать';
    // let split = str.split(' ');
    // console.log(split);

//6. - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

//
//      let delete_characters = (str, length) => {
//          return str.substring(0, length);
//
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

//7. - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//     let insert_dash = (str) => {
//        let result = str.split(' ').join('-').toUpperCase();
//        return result;
//     }
//
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//8. - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.


    // let fun = (str) => {
    //     return str.substring(0, 1).toUpperCase() + str.substring(1);
    // }
    //  let string = 'hello world';
    // console.log(fun(string));


// 9. - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

    //  let capitalize = (str) => {
    //  let result = str.split(' ')
    //      .map(word => word.substr(0,1).toUpperCase()+ word.substr(1,word.length));
    //  return result;
    //  }
    //
    //  let string = 'hello world okten johney';
    // console.log(capitalize(string));