function Family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayFullInfo = function () {
        return `Имя: ${name}, Возраст ${age}, Пол: ${gender}`;
    };
    this.createWork = function (work) {
        console.log(work);
    };
}

var zhenya = new Family('zhenya', 24, 'male');
console.log(zhenya.sayFullInfo());
zhenya.createWork('Программист');

var vania = new Family('vania', 32, 'male');
console.log(vania.sayFullInfo());
vania.createWork('Техник-технолог');

var sania = new Family('sania', 49, 'male');
console.log(sania.sayFullInfo());
sania.createWork('Программист');

var sergei = new Family('sergei', 27, 'male');
console.log(sergei.sayFullInfo());
sergei.createWork('Экономист');

var andrei = new Family('andrei', 14, 'male');
console.log(andrei.sayFullInfo());
andrei.createWork('Школьник');

let allPerson = [];
allPerson.push(zhenya);
allPerson.push(vania);
allPerson.push(sania);
allPerson.push(sergei);
allPerson.push(andrei);

console.log(allPerson);


// function oldestPerson(allPerson) {
//     allPerson.sort(function (a, b) {
//         return a.age - b.age;
//     });
//     return allPerson[allPerson.length - 1];
// }

let oldestPerson = (allPerson) => allPerson
    .sort((a, b) => a.age - b.age)
    .pop();

console.log(oldestPerson(allPerson));