const data = ('Hello World!');
const data1 = ('Welcome World');

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString(data))
console.log(reverseString(data1))