const isPrime = (num) => {
    for (var i = 2; i < num; i++){
        if (num % i == 0)
            return false;
    }
    return num > 1;
}

/// array
var arr = [4, 6, 5, 1, 9, 11, 13];
console.log(`arr: ${arr}`);

//some
Array.prototype.mySome = function(callbackFn) {
    for(i = 0; i < this.length; i++) {
        if (callbackFn(this[i]))
            return true;
    }
    return false;
}

console.log(`arr some is: ${arr.some(isPrime)}`);
console.log(`arr mySome is: ${arr.mySome(isPrime)}`);