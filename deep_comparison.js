
const deepEqual = function(obj1, obj2){
    if(typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null){
        if(Object.keys(obj1).length != Object.keys(obj2).length)
            return false;
        for(let prop of Object.keys(obj1)){
            if(!Object.keys(obj2).includes(prop))
                return false;
            if(!deepEqual(obj1[prop], obj2[prop])) //evaluates the value of prop to get that property name
                return false;
        }
        return true;
    } else 
        return (obj1 === obj2);
    
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true