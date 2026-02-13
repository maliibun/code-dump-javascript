const JOURNAL = require('./journal.js');

const uniqueEvents = function() {
    let table = [];
    for(let entry of JOURNAL){
        for(let event of entry.events){
            if(!table.includes(event))
                table.push(event);
        }
    }

    return table;
}

const fillFreqTable = function (event) {
    let table = [0,0,0,0];
    let index;
    for(let entry of JOURNAL){
        index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index]++;
    }

    return table;
}

const calcPhi = function(table){
    return ( table[3]*table[0] - table[1]*table[2]) / Math.sqrt(
        (table[3] + table[2]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2])
    );
}

const uniqueTable = uniqueEvents();
for(let event of uniqueTable){
    console.log(event + " : " + calcPhi(fillFreqTable(event)));
}


