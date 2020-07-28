//IndexOf
const data = new Array(1,2,3,4,5)
const index = data.indexOf(3)
console.log(index)

//lastIndexOf
const index1 = data.lastIndexOf(5)
console.log(index1)

//includes
const find  = 6
const find1 = 5
console.log(data.includes(find))
console.log(data.includes(find1))

//Fill
console.log(data.fill(3));

//Join
const text = data.join('-')
console.log(text)

//SUM
var sum = data.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);