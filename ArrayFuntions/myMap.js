/// array
var arr = [4, 6, 5, 1, 9, 11, 13];
console.log(`arr: ${arr}`);

// map
Array.prototype.myMap = function(callbackFn) {
    var newarr = [];
    for(var i = 0; i < this.length; i++) {
        newarr.push(callbackFn(this[i]));
    }
    return newarr;
}

console.log(`arr map: ${arr.map((item) => item*3)}`);
console.log(`arr myMap: ${arr.myMap((item) => item*3)}`)

