// implement factorial with recursion
function factorial(n) {
  if (n == 0 ) return 1;
  else return n*factorial(n-1);
}

var n5 = factorial(5);
console.log(n5);