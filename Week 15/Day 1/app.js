function fibonacci(input){
    var firstNumber = 0
    var currentNumber = 1;
    var nextNumber = 0;
    for (var i = 0; i < input; i++){
        console.log(i + ":" + firstNumber)
        nextNumber = firstNumber + currentNumber
        firstNumber = currentNumber
        currentNumber = nextNumber
    }
    return firstNumber
}
console.log(fibonacci(3))

// function fibonacciR(input){
//     var firstNumber = 0
//     var currentNumber = 1;
//     var nextNumber = 0;
//     var n = 0;
//     if (n === input){
//         return firstNumber
//     } 
//     return n+1(fibonacciR(input))
// }
// console.log(fibonacciR(5))

// function isPrime(n){
    
// }

var fib = function(n){
    if(n < 2){
        return n;
    }
    
    return fib(n-1) + fib(n-2)
}

fib(10);


var fibSequence = [0, 1];
function calculateFib(x) {
   if ( fibSequence.length >= x + 1){
       return fibSequence[x];
   }
  for (var i = fibSequence.length; i <= x; i++) {
      console.log("calculating...")
    fibSequence.push(fibSequence[i-1]+fibSequence[i-2])
  }
  console.log(fibSequence[x]);
}
calculateFib(10);


