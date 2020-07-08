//while

//Выведите столбец чисел от 1 до 100.

let i1 = 1;
while (i1 <= 100) {
    console.log(i1);
    i1++;
}

for (let b1 = 1; b1 <= 100; b1++) {
    console.log(b1);
}


console.log(" ");

//Выведите столбец чисел от 11 до 33.
let i2 = 11;
while (i2 <= 33) {
    console.log(i2);
    i2++;
}

for (let b2 = 11; b2 <= 33; b2++) {
    console.log(b2);
}

console.log(" ");


//Выведите столбец четных чисел в промежутке от 0 до 100.
let i3 = 0;
while (i3 <= 100) {
    console.log(i3);
    i3 = i3 + 2;
}

for (let b3 = 0; b3 <= 100; b3 += 2) {
    console.log(b3);
}


console.log(" ");

//С помощью цикла найдите сумму чисел от 1 до 100.
let i4 = 1;
let sum = 0;
while (i4 <= 100) {

    sum += i4;
    i4++;
}
console.log(sum);

let sum2 = 0;
for (let b4 = 1; b4 <= 100; b4++) {
    sum2 += b4;
}

console.log(sum2);