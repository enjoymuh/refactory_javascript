//Sort Function
const data = [4, 2, 1, 3, 5];
data.sort()
console.log(data)

//Reverse Function
data.reverse()
console.log(data)

//Slice & Insert
const items = [4, 2, 1, 3, 5];
const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]
  const result = insert(items, 3, 6)

console.log(result)

