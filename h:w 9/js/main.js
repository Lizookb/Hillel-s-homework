// Нужно написать функцию, которая принимает 1 параметр.
// При первом вызове она его запоминает, при втором суммирует переданный параметр с тем, что передали первый раз и т.д.
// например:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

(function () {
  function sum(value) {
    let number = value;
    let a;
    sum = function () {
      if (arguments[0]) {
        a = arguments[0]
      }
      else {
        a = 0
      }
      return number = number + a;
    };
    return sum();
  }
  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));
})();




