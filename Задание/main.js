function Family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayFullInfo = function () {
        return `Имя: ${name}, Возраст ${age}, Пол: ${gender}`;
    };
    this.createWork = function (work) {
        this.work = work;
    };

}

var zhenya = new Family('zhenya', 24, 'male');
console.log(zhenya.sayFullInfo());
zhenya.createWork('Безработный');

var sveta = new Family('sveta', 32, 'female');
console.log(sveta.sayFullInfo());
sveta.createWork('Техник-технолог');

var tania = new Family('tania', 49, 'female');
console.log(tania.sayFullInfo());
tania.createWork('Программист');

var sergei = new Family('sergei', 24, 'male');
console.log(sergei.sayFullInfo());
sergei.createWork('Экономист');

var andrei = new Family('andrei', 24, 'male');
console.log(andrei.sayFullInfo());
andrei.createWork('Безработный');

let allPerson = [];
allPerson.push(zhenya);
allPerson.push(sveta);
allPerson.push(tania);
allPerson.push(sergei);
allPerson.push(andrei);

console.log(allPerson);


// function oldestPerson(allPerson) {
//     allPerson.sort(function (a, b) {
//         return a.age - b.age;
//     });
//     return allPerson[allPerson.length - 1];
// }



//1.Возраст самого старшнего
let oldestPerson = (allPerson) => allPerson
    .sort((a, b) => a.age - b.age)[allPerson.length - 1];
console.log(oldestPerson(allPerson));

//2. Средний возраст
// function averageAge(allPerson) {
//     allPerson.reduce((acc, currentValue) => {
//         return acc + currentValue.age;
//     }, 0);
// }
// console.log(averageAge(allPerson));
//2. Средний возраст
let totalAge = allPerson.reduce((acc, user) => (acc + user.age), 0) / allPerson.length;

console.log(totalAge);



//3.Удаление одного члена семьи
// function removePersone(allPerson) {
//     allPerson.pop();
//     return allPerson;
// }
// console.log(removePersone(allPerson));

//4.Нахожднение женщин

// function findWomen(women) {
//     women.map((index) => {
//         if (index.gender === 'Female') {
//             return women.index;
//         }
//     });
// }

// let allWomen = allPerson.map((index) => (index.gender === 'female'));
// let allWomen = allPerson.find(item => item.gender === 'female');
let allWomen = (allPerson) => allPerson.filter((item) => (item.gender === 'female'));
console.log(allWomen(allPerson));

//5 Поиск безработных
const allUnemployed = (allPerson) => allPerson.filter(item => item.work === 'Безработный');
console.log(allUnemployed(allPerson));


//6 Добавить нового члена семьи
function createNewPerson(person) {
    return allPerson.push(person);
}
let petia = new Family('petia', 21, 'male');
petia.createWork('Адвокат');
createNewPerson(petia);
console.log(allPerson);


//7 Найти мужчин
const allMen = (allPerson) => allPerson.filter(item => item.gender === 'male');
console.log(allMen(allPerson));


//8 Список всех работ

let allWork = (allPerson) => allPerson.map(item => item.work);

console.log(allWork(allPerson));


//9 Узнать есть ли люди с одинаковым возрастом
let sameAge = allPerson.filter((item, index) => {
    return allPerson.indexOf(item) !== index;
});



console.log(sameAge);



//10 Отпределить код рождения человека

// function yearsOld(year) {
//     year.map(item => {
//         return item.age;
//     });
//     return year;
// }

// console.log(yearsOld(allPerson));


let yearsOld = (allPerson) => allPerson.map(item => {
    let now = 2020;
    return now - item.age;
})

console.log(yearsOld(allPerson));