let height = 5;
let width = 8;
let res;
for(let i = 0; i < height; i++){
    res = "";
    for(let j = 0; j < width; j++){
        res += ( (i + j) % 2 ) ? "#" : " ";
    }
    console.log(res);
}