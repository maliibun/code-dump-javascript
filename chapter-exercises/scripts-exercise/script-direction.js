
require('./scripts.js');

function characterCount( script ){
    return script.ranges.reduce( (count, [a, b]) => {
        return count + (b - a); // not inclusive of b
    }, 0 );
}

console.log("nr of characters of Aldam script: ");
console.log(characterCount(SCRIPTS[0]));

console.log("script with the biggest nr of characters: ");
console.log(SCRIPTS.reduce( (a, b) => {
        return characterCount(a) < characterCount(b) ? b : a;
}));

function average( array ){
    return array.reduce( (a, b) => {
        return a + b;
    }) / array.length;
}

console.log("average of living scripts: ");
console.log(Math.round( average( SCRIPTS.filter( s => s.living ).map( s => s.year))));
//filters the scripts to only ones that are living, maps them to an array composed only of their respective years, takes the average


function characterScript( code ){
    for(let script of SCRIPTS){
        if(script.ranges.some( ([a, b]) =>{
            return (code >= a && code < b);
        }))
            return script;
    }

    return null;
}

let str = "hello";
console.log("script of " + str + ":");
console.log(characterScript(str.codePointAt(0)).name);

function countBy( items, groupName ){
    let counts = [];
    for(let item of items){
        let name = groupName(item);
        let obj = counts.find( (c) => c.name == name);
        if(!obj){
            counts.push({name, count: 1});
        } else 
            obj.count++;
    }

    return counts;
}

let freq = countBy("wassuppp", (char) => {
    return characterScript(char.codePointAt(0)); 
});
console.log(...freq);
console.log(...countBy( [1,2,3,5,9,10], (x) => x < 10));

function textScripts(text){
    let freq = countBy( text, (char) => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    });
    freq = freq.filter( (script) => script.name != "none");

    //s = 0, freq el.count
    let total = freq.reduce( ( s, {count}) => {
        return s + count;
    }, 0);

    return freq.map( ({name,count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    })
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

//proposed exercise
function dominantDirection( text ){
    let freq = countBy(text, (char) => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    });
    freq = freq.filter( (el) => el.name != "none");

    return freq.reduce( (a, b) => {
        if(a.count > b.count)
            return a.name;
        else return b.name;
    },"");
}

console.log(dominantDirection("Hello!"));
//ltr
console.log(dominantDirection("Hey, مساء الخير"));
//rtl