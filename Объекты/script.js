// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {
    'name': 'John',
    'surname': 'Smith',
}

user.name = "Pete";
delete user.name;


//Сумма всех сотрудников

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
    //console.log(salaries[key]);
}

console.log(sum);


//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric() {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            console.log(menu[key] *= 2);
        }
    }
}

multiplyNumeric(menu);


// Создайте объект obj.Выведите на экран элемент с ключом 'c'
// двумя способами: через квадратные скобки и как свойство объекта:
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
console.log(obj['c']);


// 2)Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
var obj = { Коля: '1000', Вася: '500', Петя: '200' };
console.log(obj.Коля);
console.log(obj.Петя);



// 3)Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите в консоль текущий день недели.

let obj1 = {
    '1': "Понедельник",
    '2': "Вторник",
    '3': "Среда",
    '4': "Четверг",
    '5': "Пятница",
    '6': "Суббота",
    '7': "Воскресенье"
}

console.log(obj1[6]);


// 4)Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
let dayNumb = 3;
console.log(obj1[dayNumb]);