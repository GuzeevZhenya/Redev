// //4
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(word) {

//     let array = word.split("")
//         .map((word, i) => word.charAt(0).toUpperCase() + word.repeat(i))
//         .join("-");
//     return array;
// }

// console.log(accum('acbcd'));


// //8 Напишите функцию, которая возвращает минимальное и максимальное количество заданного массива.

// function maxAndMin(array) {
//     return `Максимальное число = ${ Math.max(...array)}, Минимальное = ${Math.min(...array)}`;
// }

// console.log(maxAndMin([43, 22, 12, 44, 12, 22, 4, 12, 234]));



// //9 
// //Simple, учитывая строку слов, возвращает длину самого короткого слова.
// // Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// function shotText(text) {
//     let textArray = text.split(' ');
//     let min = textArray[0];
//     for (let i = 0; i < textArray.length; i++) {
//         if (min.length > textArray[i].length) {
//             min = textArray[i];
//         }
//     }
//     return min;
// }

// console.log(shotText('аммм аааммммм ам f ааааккака куауаука'));



// //10 Найти позицию слова needle в массиве

// function findNeedle(array) {
//     return `Нашел иглу в положении ${array.indexOf('needle')}`;
// }

// console.log(findNeedle(["bla", "wekmvever", "bntyn", "qwd", "needle", "qfverv", "rtbrtb"]));


// //11 По заданному набору чисел вернуть аддитивную инверсию каждого. Каждый позитив становится негативом, а негатив становится позитивом.
// // invert([-1,-2,-4,-5]) == [1,2,4,5]
// // invert([1,2,4,5]) == [-1,-2,-4,-5]
// // invert([1,-2,4,-5]) == [-1,2,-4,5]

// function invert(array) {
//     return array.map(item => item * (-1));
// }
// console.log(invert([-1, -2, -4, -5]));


// //12
// // Удалить из одного массива все элементы второго массива.
// // arrayDiff([1,2],[1]) == [2]
// // arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(array1, array2) {
//     array1 = array1.filter((item) => {
//         return array2.indexOf(item) < 0;
//     });
//     console.log(array1);
// }

// console.log(arrayDiff([12, 12, 43], [21, 56, 234, 65, 12]));



// //13 Функция принимает число n (n> 0), чтобы вернуть обратную последовательность от n до 1
// // Например n = 5 на выходе у тебя должно быть 5,4,3,2,1
// function obrPosledovatelnost(word) {
//     for (i = word; word > 0; word--) {
//         console.log(word);
//     }
// }

// obrPosledovatelnost(5);

// //14
// // Cоздай функцию, которая возвращает сумму двух наименьших положительных чисел, учитывая массив из минимум 4 положительных чисел
// // [12,423,54,1235,3,15,2,52] => 5

// function sumOfTwoLowerNumbers(array) {
//     // let min1 = Math.min(...array);
//     // let min2;

//     array.sort((a, b) => a - b);
//     let sum = array[0] + array[1];
//     return sum;

// }

// console.log(sumOfTwoLowerNumbers([12, 11, 423, 54, 1235, 3, 0, 15, 2, 52, 1]));


// //16
// // Напиши функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. Все пробелы в строке должны быть сохранены.
// // This is an example! -> sihT si na !elpmaxe

// function reverseArray(array) {
//     return array.split(" ")
//         .map(item => item.split("").reverse().join(""))
//         .join(" ");
// }

// console.log(reverseArray('fasdfasdweas regerger egerg'));


// // 17
// // Написать функцию которая переделывает строку с camelCase в snake_case
// // solution("redevCourses") -> "redev_courses"
// //Не доделал
// // function camalCase(letters) {
// //     for (let i = 0; i < letters.length; i++) {
// //         if (letters[i] === letters[i].toUpperCase()) {
// //             let arr = "_" + letters[i].toLowerCase();
// //             console.log(arr);
// //         }
// //         console.log(letters);
// //     }
// // }

// function camalCase(word) {
//     return word.split("").map((item, index) => item.toLowerCase() + item.slice(1) + "_").join('');
// }

// console.log(camalCase('perVol'));



// //№22

// // transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]
// // transform ([1, 3, '--discard-prev', 4]) => [1, 4]

// function transform(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr = arr;
//         if (newArr[i] == '--discard-next') {
//             // newArr = arr.splice(i, 2);
//             newArr.splice(i, 2);
//             return newArr;
//         } else if (arr[i] === '--discard-prev') {
//             newArr.splice(i - 1, 2);
//             return newArr;
//         } else if (newArr[i] == '--double-next') {
//             newArr[i] = newArr[i + 1];
//             return newArr;
//         } else if (newArr[i] == '--double-preve') {
//             newArr[i] = newArr[i - 1];
//             return newArr;
//         }
//     }
// }

// console.log(transform([1, 3, '--double-preve', 4, 5]));

// //24
// function isUpperCase(str, character) {
//     // return str.split();

//     for (let i = 0; i < str.length; i++) {
//         if (i == character && str[i] == str[i].toUpperCase()) {
//             console.log('Верх: ' + str[i]);
//         } else {
//             console.log('Низ: ' + str[i]);
//         }
//     }
// }

// console.log(isUpperCase('weEwFef', 2));


// //25
// // Напишите функцию capitalizeFirstLetter(str), которая преобразоввывает первый символ строки в нижний регистр.
// let str = "Пример Cтроки";


// function capitalizeFirstLetter(str) {
//     // return str.split(",").map(item => item = item.toLowerCase());
//     let allStr = str.slice(1);
//     let firstStr = str[0].toLowerCase();
//     return firstStr + allStr;
// };
// console.log(capitalizeFirstLetter(str));




// 38
// Напишите функцию с двумя параметрами, которая создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6];
let array3 = [];
// func(array1,array2) // [5,7,9,4,5]

function func(arr1, arr2) {
    // array3 = arr1.map((item, index) => item + arr2[index]);
    array3 = arr1.map((item, index) => {
        if (item == NaN) {
            item = 0;

        }
        console.log(item + arr2[index]);
    });
}




console.log(func(array1, array2));