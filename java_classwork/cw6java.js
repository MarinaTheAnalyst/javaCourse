// 1. - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
//
//     let output = (name) => {
//         if(name.includes('..')){
//        console.log(name.replaceAll('..', ' '));
//         }
//         if (name.includes('---'))
//         {
//        console.log(name.replaceAll('---', ' '));
//         }
//         if (name.includes('__'))
//         {
//        console.log(name.replaceAll('__', ' '));
//         } ;
//
//     }


// let out = (name) => {
//         return name.replaceAll('..', ' ');
// } // like an option

// console.log(output(n1));
// console.log(output(n2));
// console.log(output(n3));


//2. 2.1 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// 2.2 створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// 2.3 створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// 2.4 створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// 2.5 створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

//2.1

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
// let nums = output(3,100);
//
// console.log(nums);

//2.2


//     let output = (len, limit) => {
//         let array = [];
//         for (let i = 0; i < len; i++)
//         {
//             array.push(Math.round(Math.random() * limit));
//
//         }
//
//         return array //.sort((a, b) => a - b); //.sort((a,b) => b - a);
//     }
// let nums = output(3,100);
//
// console.log(nums);


//2.3

// let output = (len, limit) => {
//     let array = [];
//     for (let i = 0; i < len; i++)
//     {
//         array.push(Math.round(Math.random() * limit));
//
//     }
//
//     return array.filter(a => a % 2 == 0);
// }
// let nums = output(3,100);
//
// console.log(nums);




//2.4

// let output = (len, limit) => {
//     let array = [];
//     for (let i = 0; i < len; i++)
//     {
//         array.push(Math.round(Math.random() * limit));
//
//     }
//     return array.toString();
//     // or return array.map((number) => number).toString();
// }
// let nums = output(3,100);
//
// console.log(nums);

// 2.5

//  a.
// let sortNums = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[0] < array[1]) {
//             array.sort((a, b) => a - b); //.sort((a,b) => b - a);
//
//         }
//         {
//             if (array[0] > array[1]) {
//                 array.sort((a, b) => b - a); //.sort((a,b) => b - a);
//
//             }
//         }
//         return array;
//     }
// }
// let nums = [5,15,0];
// console.log(sortNums(nums));


// b.
// let sortNums = (array, direction) => {
//     for (let i = 0; i < array.length; i++) {
//         if (direction === 'asc') {
//             array.sort((a, b) => a - b); //.sort((a,b) => b - a);
//
//         }
//         {
//             if (direction === 'desc') {
//                 array.sort((a, b) => b - a); //.sort((a,b) => b - a);
//
//             }
//         }
//         return array;
//     }
// }
//
// console.log(sortNums([25, 10, 20], 'desc'));


// 3. - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    console.log(coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration));
    console.log(coursesAndDurationArray.filter(month => month.monthDuration > 5));