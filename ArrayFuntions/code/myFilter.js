const isEven = (num) => num % 2 == 0 ? true : false;

/// array
var arr = [4, 6, 5, 1, 9, 11, 13];
console.log(`arr: ${arr}`);
 
// filter
Array.prototype.myFilter = function(callbackFn) {
    const newarr = [];
    for(var i = 0; i < this.length; i++){
        if (callbackFn(this[i])) {
            newarr.push(this[i]);
        }
    }
    return newarr;
}

console.log(`arr filter: ${arr.filter(isEven)}`);
console.log(`arr myFilter: ${arr.myFilter(isEven)}`);
