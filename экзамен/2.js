// 1 способ. Оптимальный
function isWeirdNumber1(number) {
  if (number <= 0) {
    return false;
  }
  let sumOfDivisors = 0;
  for (let i = 0; i * i <= number; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
      if (i * i !== number) {
        sumOfDivisors += number / i;
      }
    }
  }
  return sumOfDivisors - number === number;
}

console.log(isWeirdNumber1(6)); // true
console.log(isWeirdNumber1(12)); // false
console.log(isWeirdNumber1(28)); // true