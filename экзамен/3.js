const MathX = (function() {
  // вычисление N-го числа Фибоначчи
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let current = 0;
    let prev1 =  1;
    let prev2 = 0;
    for (let i = 2; i < n; i++) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return current;
  }
  // вычисление всех чисел в ряду Фибоначчи до числа N
  function fibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 2] + series[i - 1]);
    }
    return series;
  }
  // Функция для проверки, является ли число простым
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  // вычисление N-го простого числа
  function prime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }
  // вычисление всех простых чисел до числа N (решето Эрастофена)
  function primeSeries(n) {
    let isPrimes = new Array(n + 1).fill(true);
    isPrimes[0] = isPrimes[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrimes[j] = false;
        }
      }
    }
    let primes = [];
    for (let i = 2; i <=n; i++) {
      if (isPrimes[i]) {
        primes.push(i);
      }
    }
    return primes;
  }

  return {
    fibonacci: fibonacci,
    fibonacciSeries: fibonacciSeries,
    prime: prime,
    primeSeries: primeSeries,
  };
})();

MathX.fibonacci();