
//1. - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User (id, name, username, email, phone) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }

let user = [
    new User(1, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(33, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(12, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(3, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(8, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(25, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(18, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(40, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(7, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707),
    new User(20, 'Mario', 'Aabri', 'marioaabr@gmail.com', +3805534707)
] ;
 console.log(user);


 //2. - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
    let func = user.filter(value => value.id % 2===0);
    console.log(func);


    //3. - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let funcSort = user.sort((a,b) => a.id - b.id); // ((a,b) => b.id - a.id);
    console.log(funcSort);

 //4. - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
    class Client {
        constructor(id, name, surname, email, phone, order) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

    let database = [
        new Client(9, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['phone']),
        new Client(10, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['case', 'headphones']),
        new Client(15, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['computer', 'iPad', 'iWatch']),
        new Client(13, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['case']),
        new Client(23, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['headphones']),
        new Client(21, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['JBL']),
        new Client(11, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['speaker']),
        new Client(5, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['laptop']),
        new Client(3, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['phone', 'case', 'iPad']),
        new Client(25, 'Arthur', 'Connan', 'arcon@gmail.com', 2345678, ['case', 'headphones'])
    ];
    console.log(database);

//5. - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


    let sortFunc = database.sort((a,b) => a.order.length - b.order.length);
        let mapping = sortFunc.map((item=> item.order));
    console.log(sortFunc, mapping);
