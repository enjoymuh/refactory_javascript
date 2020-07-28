const data = ('hello world')
const caps = data.toLowerCase() .replace(/\b\w/g, (letter) => letter.toUpperCase())
console.log(caps)