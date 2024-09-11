/// array
var arr = [4, 6, 5, 1, 9, 11, 13];
console.log(`arr: ${arr}`);

// find
Array.prototype.myFind = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i]))
            return this[i];
    }
    return undefined;
}

console.log(`find number > 10: ${arr.find((num) => num > 10)}`);
console.log(`myFind number > 10: ${arr.myFind((num) => num > 10)}`);



