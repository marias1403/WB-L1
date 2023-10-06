// Условие. Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае.
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

// Решение.

function isWeirdNumber(number) {
  if (number <= 0) {
    return false; // Отрицательные числа и ноль не могут быть странными
  }

  let sumOfDivisors = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }

  return sumOfDivisors === number;
}

isWeirdNumber();
