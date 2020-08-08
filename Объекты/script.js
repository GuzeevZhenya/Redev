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



var calculateSalary = function(price) {
    var percent = 0.35;
    if (price >= 100000) {
        var percent = 0.45;
    }
    let clear = price - price * percent;
    return clear;
}

calculateSalary(2222222);



var calculateMiles = function(distance, isBusinessClass) {
    var percent = 0.18;
    if (isBusinessClass) {
        percent += 0.04;
    }
    if (distance > 3500) {
        percent += 0.15;
    }
    return distance * percent;
};

var calculateFlights = function(distance, isBusinessClass, milesTarget) {
    var miles = calculateMiles(distance, isBusinessClass);
    console.log('Мили за перелёт: ' + miles);
    var flights = Math.ceil(milesTarget / miles);
    console.log('Количество полётов: ' + flights);
};

calculateFlights(3118, true, 15000);





function getPrice(time, isSpeed) {
    var priceHour = 1500;

    if (isSpeed) {
        time /= 2;
        priceHour *= 2.5;
    }

    if (time > 150) {
        priceHour -= 250;
    }

    var price = priceHour * time;
    return price;
}

//console.log(getPrice(200, false));




function getProfitableProject(hour, profit) {
    var urgent = getPrice(hour, true) - profit;
    var normal = getPrice(hour, false);
    var result = '';
    if (urgent < normal) {
        result = 'Выгодней срочный проект. Потратишь на него ' + urgent;
    } else {
        result = 'Выгодней обычный проект. Потратишь на него ' + normal;

    }
    return result;
}

//   //let result = urgent - normal;


//   return hour + profit;
// }

// getProfitableProject(12,2000);

let user1 = {
    name: "Джон"
};
let admin = {
    name: "Админ"
};

function sayHi() {
    //  alert(this.name);
}

// используем одну и ту же функцию в двух объектах
user1.f = sayHi;
admin.f = sayHi;

user1.f();
admin.f();
console.log(user1);
console.log(admin);

let calculator = {
    a: 2,
    b: 3,
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

console.log(calculator.sum());
console.log(calculator.mul());