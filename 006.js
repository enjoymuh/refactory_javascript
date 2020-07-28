var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var runLoop = function() {
for (var i = 1; i<=num.length; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 2 === 0) {
        console.log("Fizz");
    }
    else if (i % 3 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
};
runLoop();