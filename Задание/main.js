function family(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayFullInfo = function() {
        console.log(this.name + " " + this.age + " " + this.gender + " ");
    };
    this.createWork = function(work) {
        console.log(work);
    };
}

var zhenya = new family('zhenya', 24, 'male');
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