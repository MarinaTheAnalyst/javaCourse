
//1. Створити масив
// з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let result = Array.from({length:10}, () => Math.floor(Math.random()*10));
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Harry Potter',
    countPage: 800,
    genre: 'fantasy'
}

console.log(book);

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

//let name = 'Hunted'//too long

let anotherBook = {
    name: 'Hunted',
    pages: 400,
    genre: 'detective',
   author: 'O_neil'
}

console.log(anotherBook);

//4. Створити
// масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт--> have no clue if it was a right interpretation sorry for this ;)

let bookThird = [
    { nombre: 'Hunted',
        pages: 400,
        genre: 'detective',
        author: 'O_neil'},
    {
        name: 'Hunted',
        pages: 400,
        genre: 'detective',
        author: 'O_neil'
    }
]

console.log(bookThird.nombre, anotherBook.name, book.name);
console.log(bookThird[0]);
console.log(bookThird[1]);
console.log(bookThird[0][3]); // не підскажете як звернутись, щоб дало третю змінну?? спасибі :)

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

//6.Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v

let heightC = 10;
let dC = 4;
let r= dC/2;
let PI = 3.14;

let t = Math.pow(r,2);
let v = (heightC*t*PI).toFixed(2);

console.log(v);

//7. У прямокутного трикутника дві сторони n (зі значенням 3)
// та m (зі значенням 4).
//    Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати
//    функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;

let k = Math.sqrt (Math.pow(n, 2) + Math.pow(m,2));
console.log(k);
