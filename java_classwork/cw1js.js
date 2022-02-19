
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.


// function result (length,limit) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * limit));
//
//     }
//     return arr;
// }
//
// console.log(result(10, 10));

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let obj = {name:'Book', pages:800, genre: 'Detective'};
// console.log(obj);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let obj = {name:'Book', pages:800, genre: 'Detective', authors: 'Kings, Roswood'};
// console.log(obj);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let array = [
//     {name:'Book', pages:800, genre: 'Detective', authors: 'Kings, Roswood'}
// ];
// console.log(array);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// function s(h, w){
//     return h*w;
// }
// console.log(s(23, 10));

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// function v(h, d) {
//     let newD = d / 2;
//     let phi = 3.14;
//     let result = newD*h*phi;
//     return result;
// }
//
// console.log(v(10, 4));


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// let n = Math.pow(3, 2);
// let m = Math.pow(4,2);
// let k = m+n;
// console.log(k);