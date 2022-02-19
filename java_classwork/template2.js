//1) Напишіть код, який :


//     a) додає клас з назвою групи, елементу з ід main_header
// let newHeader = document.getElementById('main_header');
// console.log(newHeader);
//
// //     b) робить шириниу елементу ul 400px
// let headerUL = document.getElementsByTagName('ul');
// console.log(headerUL[0].style.width = '400px');
//
// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (const linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
// console.log(linkList);
//     d) отримує текст який зберігається в елементі з класом listElement2
// let listElement = document.getElementsByClassName('listElement2');
// listElement[0].innerHTML = '<a href=""> get text </a>';

//e) отримує всі елементи li та змінює ім колір фону на сірий
// let allLi = document.getElementsByTagName('li');
// for (const allLiElement of allLi) {
//     allLiElement.style.background = 'grey';
//
// }
// console.log(allLi);
//  f) отримує всі елементи 'a' та додає їм клас anchor
// let tagA = document.getElementsByTagName('a');
// for (const tagAElement of tagA) {
//     tagAElement.classList.add('anchor');
//     console.log(tagAElement);
//
// }

//  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementA = document.getElementsByTagName('a');
// for (let elementAElement of elementA) {
//     console.log(elementAElement);
//     let newArgument = elementAElement.innerText;
//         if (newArgument === 'link3') {
//             elementAElement.style.fontSize = '40px'; }
//     }

//   h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementX = document.getElementsByTagName('a');
// console.log(elementX);
// for (const elementXXX of elementX) {
//     console.log(elementXXX)
//         let anewVersion = elementXXX.innerText;
//         elementXXX.classList.add(`element_${anewVersion}`);
//
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// console.log(subHeader)
// for (let subHeaderElement of subHeader) {
//     let color = prompt('enter your color');
//     let style = subHeaderElement.style.background = color;
//     console.log(style);
// }
//

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту
//     = content 2 segment . Колір отримати з prompt()
//
// let subHeader = document.getElementsByClassName('sub-header');
// console.log(subHeader)
// for (let subHeaderElement of subHeader) {
//     let color = prompt('enter your color');
//     if (subHeaderElement.innerText === 'content 2 segment'){
//         let style = subHeaderElement.style.color = color;
//         console.log(style);
//     }
// }

// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elementContent = document.getElementsByClassName('content_1');
// for (let elementContentElement of elementContent) {
//     let newText = prompt('')
//     console.log(elementContentElement.innerText = newText);
//
// }

//     l) отримати елементи p та змінити їм padding на 20px
// let elementP = document.getElementsByTagName('p');
// console.log(elementP);
// for (const elementPElement of elementP) {
//     elementPElement.style.padding = '20px';
//     console.log(elementPElement);
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let eleNew = document.getElementsByClassName('text2');
// for (const eleNewElement of eleNew) {
//     let newTextie = eleNewElement.innerText = 'sep-2021';
//     console.log(newTextie);
// }