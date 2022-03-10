// 1.
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let forma = document.forms.forma;
forma.onsubmit = function (sub){
    sub.preventDefault();

    let nameInput = this.name.value;
    let ageInput = this.age.value;

    let user = {nameInput, ageInput};
    localStorage.setItem('key', JSON.stringify(user));
}


// 2.
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let array = JSON.parse(localStorage.getItem('cars')) || [];

let car = document.forms.car;
car.onsubmit= function (lol){
    lol.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;

    let caro = {model, type, volume};
    array.push(caro);
    localStorage.setItem('cars', JSON.stringify(array));

}