// 1. - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let div = document.createElement('div');
// div.innerText = 'first input';
// div.style.margin = '15px';
// document.body.appendChild(div);
//
// let divsecond = document.createElement('div');
// divsecond.innerText = 'second input';
// divsecond.style.margin = '15px';
// document.body.appendChild(divsecond);
//
//
// let formFirst = document.createElement('form');
// formFirst.setAttribute('name', 'formFirst');
// div.appendChild(formFirst);
//
// let formSecond = document.createElement('form');
// formSecond.setAttribute('name', 'FormSecond');
// divsecond.appendChild(formSecond);
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'inputOne');
//
// let inputSecond = document.createElement('input');
// inputSecond.setAttribute('name', 'inputSecond');
// inputSecond.style.marginLeft = '10px';
//
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'input3');
//
// let input4 = document.createElement('input');
// input4.setAttribute('name', 'input4');
// input4.style.marginLeft = '10px';
//
//
// let button = document.createElement('button');
// button.innerText = 'Hello, click here!';
//
// document.body.appendChild(button);
//
// formFirst.append(inputOne,inputSecond);
// formSecond.append(input3,input4);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formFirst.inputOne.value);
//     console.log(document.forms.formFirst.inputSecond.value);
//    console.log(document.forms.formSecond.input3.value);
//    console.log(document.forms.formSecond.input4.value);
//     })


//
// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.setAttribute('name', 'inputeTwo');
//
// let inputeThree = document.createElement('input');
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.setAttribute('name', 'inputeFour');
//
// let button = document.createElement('button');
// button.innerText = 'ГОРІШКАМ БОЙ';
//
// document.body.appendChild(button);
//
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree,inputeFour);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
// })


// 2. - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let inputFirst = document.createElement('input');
// let inputSecond = document.createElement('input');
// let inputSub = document.createElement('input');
//
// let btn = document.createElement('button');
// btn.innerText = 'Hi there, click here and discover!';
//
// document.body.append(inputFirst, inputSecond, inputSub, btn);
//
// btn.addEventListener('click', function (){
//     let output = inputFirst.value;
//     let outputNext = inputSecond.value;
//     let result = inputSub.value;
//
//
//     function createSpreadsheet(output,outputNext,inner){
//         let spreadsheet = document.createElement('table');
//         let div = document.createElement('div');
//
//         spreadsheet.style.border = '10px solid pink';
//         div.appendChild(spreadsheet);
//         document.body.appendChild(div);
//
//         for (let i = 0; i < output; i++) {
//             let output = document.createElement('output');
//             output.style.border = '3px solid yellow';
//             for (let j = 0; j < outputNext; j++) {
//                 let outputNext = document.createElement('outputNext');
//                 outputNext.style.border = '3px solid blue';
//                 outputNext.innerText = `${inner}`;
//                 spreadsheet.appendChild(output);
//                 output.appendChild(outputNext);
//
//             }
//
//         }
//
//     }
//     createSpreadsheet(output,outputNext, result);
// })

// 3. - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['donkey', 'insane', 'deep lit'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = "Let's check!";
//
// document.body.append(input, button);
//
// button.addEventListener('click', function (){
//     let result = input.value;
//
//     for (let element of array) {
//         if (element === result) {
//             alert('It is inappropriate!');
//             return document.write('instead, educate yourself!');
//         }
//     }
//
//         if (result) {
//             alert('Good job!');
//             input.value='';
//         }
//
// })

//4. - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кноп

let array = ['donkey', 'insane', 'deep lit'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Let's check!";

document.body.append(input, button);

button.addEventListener('click', function (){
    let result = input.value;

    for (let element of array) {
        if (array.includes(element)) {
            alert('It is inappropriate!');
            return document.write('instead, educate yourself!');
        }
    }

        if (result) {
            alert('Good job!');
            input.value='';
        }

})