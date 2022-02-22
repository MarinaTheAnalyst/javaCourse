// 1. Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let createClasses = document.createElement('div');

createClasses.classList.add('wrap');
createClasses.classList.add('collapse');
createClasses.classList.add('alpha');
createClasses.classList.add('beta');

createClasses.style.background = 'purple';
createClasses.style.color = 'white';
createClasses.style.width = '120px';
createClasses.innerText = 'Trololo';

document.body.append(createClasses);
document.body.append(createClasses.cloneNode(true));


// 2 - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const element of array) {
    let li = document.createElement('li');
    li.innerText = element;
    menu.appendChild(li);

}

//3. - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//     for (const infoElement of coursesAndDurationArray) {
//         let div = document.createElement('div');
//         div.innerText = `title : ${infoElement.title} , monthDuration : ${infoElement.monthDuration}` ;
//         div.style.background = 'black';
//         div.style.color = 'pink';
//         document.body.append(div);
//
// }
//

// 4. - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// for (let item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `Title: ${item.title}`;
//     h1.style.color = 'deeppink';
//
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `month_duration: ${item.monthDuration}`;
//     p.style.background = 'black';
//     p.style.color = 'silver';
//     p.style.fontSize = '20px'
//
//     div.append(h1);
//     div.append(p);
//     document.body.append(div);
// }


// ----------------------- the difference between appendChild and append----------------------

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `Title: ${item.title}`;
    h1.style.color = 'deeppink';

    let div1 = document.createElement('div');
    div1.classList.add('item');

    let h = document.createElement('h1');
    h.classList.add('heading');
    h.innerText = `Month: ${item.monthDuration}`;
    h.style.color = 'deeppink';

    div.appendChild(h1);
    div1.appendChild(h);
    document.body.append(div, div1);

}
