/// array
var arr = [4, 6, 5, 1, 9, 11, 13];
console.log(`arr: ${arr}`);

//reduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator != undefined ? callbackFn(accumulator, this[i]) : accumulator = this[0];
    }
    return accumulator;    
}

console.log(`arr reduce: ${arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`);
console.log(`arr myReduce 1: ${arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 0)}`);
console.log(`arr myReduce 1: ${arr.myReduce((accumulator, currentValue) => accumulator + currentValue)}`);