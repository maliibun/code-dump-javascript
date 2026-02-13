const arrayToList = function (arr){
    let list;
    let lastObj = null;
    for(let i = arr.length - 1; i >= 0; i--){
        list = { value: arr[i], rest: lastObj };
        lastObj = list;
    }

    return list;
}

const listToArray = function(list){
    let table = [];
    let cnt = 0;
    for(let el = list; el; el = el.rest)
        table[cnt++] = el.value;
    return table;
}

const prepend = function(value ,list){
    return {
        value: value, rest: list
    }
}

const nth = function(list, nth){
    let cnt = 0;
    let el;
    for(el = list; el && cnt++ < nth; el = el.rest){ }

    return el.value;
}

const recNth = function(list, nth){
    if(nth == 0)
        return list.value;
    return recNth(list.rest, --nth);
}

console.log(JSON.stringify(arrayToList([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(recNth(arrayToList([10, 20, 30]), 1));