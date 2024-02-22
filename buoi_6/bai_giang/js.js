/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  for (let count = 1; count <= n; count++)
    if (n % 3) {
      if (n % 5) {
        arr.push(count);
      } else {
        arr.push("Buzz");
      }
    } else {
      if (n % 5) {
        arr.push("Fizz");
      } else {
        arr.push("FizzBuzz");
      }
    }
};
