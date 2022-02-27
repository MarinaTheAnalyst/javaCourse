// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     text.style.display = 'none';
// }


//2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let text = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     text.style.display = 'none';
//     this.style.display='none'
// }

// 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let button = document.getElementById('buttonNext');
// button.onclick = function (){
//     let age = document.getElementById('age').value;
//     if(!age){
//         alert('Provide your age!');
//     } else if (+age < 18) {
//         alert('Not enough');
//     }
//         else {
//             alert('Pass the exam, enjoy');
//     }
//
// }


//4. - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.querySelector('.menu');
// let title = menu.querySelector('.title');
//
// title.onclick = function () {
//     menu.classList.toggle('hidden');
// };


// 5. - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments= [
//     {title:'lorem', body:'lorem ipsulm dolo sit ameti'},
//     {title:'lorem', body:'lorem ipsulm dolo sit ameti'},
//     {title:'lorem', body:'lorem ipsulm dolo sit ameti'},
// ];
//
// let div= document.createElement('div')
// for (const divElement of comments) {
//     let divv = document.createElement('div');
//     let h2=document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//
//     h2.innerText = divElement.title;
//     p.innerHTML = divElement.body;
//     button.innerHTML = 'Try me'
//
//     button.onclick = function () {
//        button.previousElementSibling.classList.add('hidden');
//     }
//
//     divv.append(h2,p,button);
//     div.appendChild(divv);
// }
// document.body.appendChild(div);