
const loop = function (x, test, update, body) {
    if(test(x)){
        body(x);
        x = update(x);
        return loop(x, test, update, body);
    }

    return;
}

//value, test function, update function, body function
loop(3, n => n > 0, n => n - 1, console.log);