const reverseArray = function (arr) {
    let table = [];

    for(let i = arr.length - 1; i >= 0; i --)
        table[i] = arr[i];
    return table;
}

function reverseArrayInPlace(arr) {
    let n = arr.length;
    let aux;
    for(let i = 0; i < n / 2; i++){
        aux = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = aux;
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);