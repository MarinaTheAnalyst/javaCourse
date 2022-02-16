// 1. - є масив відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
//
// console.log(coursesArray.sort((a,b)=> b.modules - a.modules));

// 2. - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

    // let cutString = (str, n) => {
    //     let result =  str.substr(0, n).split() + ',' +' ' + str.substr(3, n).split()+ ',' +' '
    //         + str.substr(6, n).split()+ ',' +' ' + str.substr(9, n).split();
    //     return result;
    // }
    //
    // document.writeln(cutString('наслаждение', 3));

//3.
// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
let mail = 'someeMAIL@i.ua';


 let fun = (str, char, from) =>{
    return (str.indexOf(char,from) !== -1) ? //? : --> is true :(or) false
     str.indexOf(char,from): false
 }
    let validation = (email) =>{
        let emailCh = fun(email,'@',2);
        let pointCh = fun(email, '.', emailCh +3)
            return (emailCh && pointCh) ? 'Your Email is valid':'Your email is NOT valid'
    }


    console.log(validation(mail));



// 4. Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

//  let count = (stringsearch, str) => {
//     return str.split(stringsearch).length -1
//
//  }
//
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// document.writeln(count(symb, str));


// 5.
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) => {
//     return str.split().slice(0,n);
// }

// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 2)) // 'Сила тяжести приложена к центру'

