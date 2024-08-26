function printForecast(arr) {
    
    let str = `" `;
    for(let i = 0; i < arr.length; i++) { 
        str += `... ${arr[i]}°C in ${i+1} day`;
        if (numberMulti(i+1))
            str += `s`;
    }
    console.log(str + '"');
}

function numberMulti(number) {
    if (number > 1)
        return true;
    return false;
}


let data01 = [17, 21, 23]
let data02 = [12, 5, -5, 0, 4]

printForecast(data01)
printForecast(data02)