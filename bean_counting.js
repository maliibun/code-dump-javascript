function countChars(str, c) {
    let cnt = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == c)
            cnt++;
    }

    return cnt;
}

console.log(countChars("kekakar", 'k'));