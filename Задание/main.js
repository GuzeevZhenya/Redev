function family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayFullInfo = function() {
        return `Имя: ${name}, Возраст ${age}, Пол: ${gender}`;
    };
    this.createWork = function(work) {
        console.log(work);
    };
}

var zhenya = new family('zhenya', 24, 'male');
console.log(zhenya.sayFullInfo());
zhenya.createWork('Программист');


var vania = new family('vania', 32, 'male');
console.log(vania.sayFullInfo());
vania.createWork('Техник-технолог');

var sania = new family('sania', 25, 'male');
console.log(sania.sayFullInfo());
sania.createWork('Программист');

var sergei = new family('sergei', 27, 'male');
console.log(sergei.sayFullInfo());
sergei.createWork('Экономист');

var andrei = new family('andrei', 14, 'male');
console.log(andrei.sayFullInfo());
andrei.createWork('Школьник');