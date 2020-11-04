//  arr = ['a', 'b', 'c'];
//  alert(arr);

//  console.log(arr[0]);
//  console.log(arr[1]);
//  console.log(arr[2]);


//  //  arr2 = ['a', 'b', 'c', 'd'];
//  //  alert(arr[0] + arr[1]);
//  //  alert(arr[2] + arr[3]);


//  let arr3 = [2, 5, 3, 9];
//  let result = (arr3[0] * arr3[1] + arr3[2] * arr3[3]);
//  alert(result);

let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let out = document.querySelector('.out');

function normalPerson(energi) {
    return energi * 15;
}

function secondPerson(energi) {
    let poket = 0;

    if (energi <= 150) {
        return energi * 20;
    }
    let outherPrice = (energi - 150) * 15;
    price = outherPrice + poket;
}

function firstLgot(energi) {
    return energi * 10;
}

function secondLgot(energi) {
    let poket = 0;
    if (energi <= 50) {
        return poket = 0;
    }
    let outherPrice = parseInt(energi - 50) * 15;
    return poket + outherPrice;
}




button.onclick = function() {
    let b = input.value;
    console.log(b);
    let array = [];
    array.push(normalPerson(b));
    array.push(secondPerson(b));
    array.push(firstLgot(b));
    array.push(secondLgot(b));
		
		
	let sortUb 	=	array.sort((a,b)=>b - a);
	let sortUp = array.sort((a,b)=>a - b);
		console.log(sortUb);
		console.log(sortUp);
		let sum = 0;
		for(let i = 0;i<array.length;i++){
			 sum += array[i];
		}
			console.log(sum);

			let sumForAll = b *  15;
			console.log(sumForAll);
		
}

