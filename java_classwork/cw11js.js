// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// 1. створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до
// масиву favorites улюблених обраних об'єктів в локальному сховищі.
// 2. Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


//1.


let allUsers = document.getElementById('users');
let some = JSON.parse(localStorage.getItem('some')) || [];

for (let user of users) {

    let userDiv = document.createElement('div');
    userDiv.innerText = user.name;

    let button = document.createElement('button');
    button.innerText = 'click here to add!';

    button.onclick=function (t){
        some.push(user);
        localStorage.setItem('some', JSON.stringify(some));
    }


    userDiv.append(button);
    allUsers.append(userDiv);
}