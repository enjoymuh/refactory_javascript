function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
   }
   function cleanString(str) {
   return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
   }
   
   console.log(anagrams('hello world', 'world hello'))
   console.log(anagrams('hellow world', 'hello there'))
   console.log(anagrams('hellow world', 'hello there!'))