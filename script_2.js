const number = prompt("Give me a number");
function fact(n) {
  let result = 1;
  while (n > 1) { //type coercion : auto & implicit conversion of values (str to num)
    result *= n; //assignement + 'operator same as: result = result * n
    n--;
  }
  return result;
}
console.log(fact(number))