let arr = [10, 20, 'int', 'voice', 25, 21, 23, 65, 12];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.pop();
console.log(arr);



let b = 5;
arr.push(b, 23, 2);
console.log(arr);


arr.shift();
console.log(arr);

arr.unshift(23, 23);
console.log(arr);


arr.splice(2, 3, 1, 0); // выбираем позицию , и удаляем кол-чо элементов, и добавляем на их место
console.log(arr);

arr = arr.concat(2, 3, 4, 2);
console.log(arr);