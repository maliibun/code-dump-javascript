

//Implement every as a function that takes an array and a predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.

function everyLoop(array, test){
    for(let el of array){
        if( !test(el) )
            return false; 
    }

    return true;
}

function everyWhile(array, test){
    let x = 0;
    while( !(array.length === 0) ){
        x = array.pop();
        if(test(x) === false)
            return false;
    }

    return true;
}

function everySome(array, test){
    
    while( !(array.length === 0) ){
        if(!array.some(test))
            return false;
        array.pop();
    }

    return true;
}

console.log( everySome([1, 3, 5], n => n < 10));
//true
console.log( everyWhile( [2, 4, 16], n => n < 10));
//false
console.log( everyLoop([] , n => n < 10));
//true;