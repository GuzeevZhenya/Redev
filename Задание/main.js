function family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayFullInfo = function () {
        return this.name + " " + this.age + " " + this.gender + " ";
    };
    this.createWork = function (work) {
        return work;
    };
}

var zhenya = new family('zhenya', 24, 'male', work = "Программист");
console.log(zhenya.sayFullInfo());
console.log(zhenya.createWork(work));

var vania = new family('vania', 32, 'male', work = "Техник-технолог");
console.log(vania.sayFullInfo());
console.log(vania.createWork(work));
var sania = new family('sania',25, 'male', work = "Программист");
console.log(sania.sayFullInfo());
console.log(sania.createWork(work));
var sergei = new family('sergei', 27, 'male', work = "Экономист");
console.log(sergei.sayFullInfo());
console.log(sergei.createWork(work));
var andrei = new family('andrei', 14, 'male', work = "Школьник");
console.log(andrei.sayFullInfo());
console.log(andrei.createWork(work));