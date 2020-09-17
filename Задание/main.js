function family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
<<<<<<< HEAD
    this.sayFullInfo = function () {
        console.log(this.name + " " + this.age + " " + this.gender + " ");
    };
    this.createWork = function (work) {
        this.work = work;
=======
    this.sayFullInfo = function() {
        return `Имя: ${name}, Возраст ${age}, Пол: ${gender}`;
    };
    this.createWork = function(work) {
        console.log(work);
>>>>>>> c6fd7753129e6a0af3d01d98aa2c9bed6accaef7
    };
}

var zhenya = new family('zhenya', 24, 'male');
<<<<<<< HEAD
zhenya.sayFullInfo();
zhenya.createWork('Программист');

var vania = new family('vania', 32, 'male');
vania.sayFullInfo();
zhenya.createWork('Техник-технолог');

var sania = new family('sania', 25, 'male');
sania.sayFullInfo();
zhenya.createWork('Программист');

var sergei = new family('sergei', 27, 'male');
sergei.sayFullInfo();
zhenya.createWork('Экономист');

var andrei = new family('andrei', 14, 'male');
andrei.sayFullInfo();
zhenya.createWork('Школьник');
=======
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
>>>>>>> c6fd7753129e6a0af3d01d98aa2c9bed6accaef7
