//4
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(word) {

    let array = word.split("")
        .map((word, i) => word.charAt(0).toUpperCase() + word.repeat(i))
        .join("-");
    return array;
}

console.log(accum('acbcd'));


//8 Напишите функцию, которая возвращает минимальное и максимальное количество заданного массива.


function maxAndMin(array) {
    return `Максимальное число = ${ Math.max(...array)}, Минимальное = ${Math.min(...array)}`;
}

console.log(maxAndMin([43, 22, 12, 44, 12, 22, 4, 12, 234]));

//10 Найти позицию слова needle в массиве

function findNeedle(array) {
    return `Нашел иглу в положении ${array.indexOf('needle')}`;
}

console.log(findNeedle(["bla", "wekmvever", "bntyn", "qwd", "needle", "qfverv", "rtbrtb"]));


//11 По заданному набору чисел вернуть аддитивную инверсию каждого. Каждый позитив становится негативом, а негатив становится позитивом.
// invert([-1,-2,-4,-5]) == [1,2,4,5]
// invert([1,2,4,5]) == [-1,-2,-4,-5]
// invert([1,-2,4,-5]) == [-1,2,-4,5]


function invert(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * -1);
    }
}

console.log(invert([-1, 2, -2, 4, -3, 9, -9, -4]));

//13 Функция принимает число n (n> 0), чтобы вернуть обратную последовательность от n до 1
// Например n = 5 на выходе у тебя должно быть 5,4,3,2,1
function obrPosledovatelnost(word) {
    for (i = word; word > 0; word--) {
        console.log(word);
    }
}

obrPosledovatelnost(5);


//16
// Напиши функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. Все пробелы в строке должны быть сохранены.
// This is an example! -> sihT si na !elpmaxe

function reverseArray(array) {
    return array.split(" ")
        .map(item => item.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseArray('fasdfasdweas regerger egerg'));


// 17
// Написать функцию которая переделывает строку с camelCase в snake_case
// solution("redevCourses") -> "redev_courses"
//Не доделал
// function camalCase(letters) {
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i] === letters[i].toUpperCase()) {
//             let arr = "_" + letters[i].toLowerCase();
//             console.log(arr);
//         }
//         console.log(letters);
//     }
// }

function camalCase(word) {
    return word.split("").map((item, index) => item.toLowerCase() + item.slice(1) + "_").join('');




}

console.log(camalCase('perVol'));