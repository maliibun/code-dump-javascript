const range = function (x, y, step = 1) {
    let arr = [];
    let cnt = 0;
    let maxnr = Math.max(x,y);
    let minnr = Math.min(x,y);
    if(step > 0){
        for(let i = minnr; i <= maxnr; i+=step)
            arr[cnt++] = i;
    } else if (step < 0){
        for(let i = maxnr; i >= minnr; i+=step)
            arr[cnt++] = i;
    }
    
    return arr;
}


const sum = function (arr){
    let s = 0;
    for(let el of arr)
        s += el;
    return s;
}   

console.log(sum(range(1,10)));
console.log(range(5,2,-1));
