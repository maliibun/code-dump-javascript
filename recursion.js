function rec(n){
    if(n < 0) return "not positive";
    if(n == 0)
        return true;
    if (n == 1)
        return false;
    return n - 2;
}

console.log(rec(-10));