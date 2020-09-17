findNextSquare = (sq) => {
    if (Number.isInteger(Math.sqrt(sq))) {
        let a = Math.sqrt(sq);
        console.log(a);
        return (a + 1) ** 2;
    } else {
        return -1;
    }
}

console.log(findNextSquare(144));




let words = ['а', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
let text = 'цуаукпуауцапукпуааааааааааааа';
let textArray = text.split('');

for (let i = 0; i < textArray.length; i++) {
    if (!words.includes(textArray[i])) {
        console.log(textArray[i]);
    }
}

// console.log(textArray);



let list = ("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6");
let listArray = list.split(' ');

function getMaxMin(num) {
    max = Math.max.apply(null, num);
    min = Math.min.apply(null, num);
    return `Максимальное число = ${max}. Минимальное число = ${min}`;
}

console.log(getMaxMin(listArray));




// №5

function getPin(pin) {
    console.log(typeof pin);
    if (Number.isInteger(pin) && typeof pin !== 'string' && (pin.toString().length === 4 || pin.toString().length === 6)) {

        return true;
    } else {

        return false;
    }
}
console.log(getPin('refe'));


function shotText(text) {
    let textArray = text.split(' ');
    console.log(textArray);
    let min = textArray[0];
    for (let i = 0; i < textArray.length; i++) {
        if (min.length > textArray[i].length) {
            min = textArray[i];

        }
    }
    return min;
}


console.log(shotText('аммм аааммммм ам ааааккака куауаука'));