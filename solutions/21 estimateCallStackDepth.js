// Условие. Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari

// Решение. Приблизительно оценить глубину тека вызовов можно с помощью рекурсивной функции.
// Эта функция будет рекурсивно вызывать саму себя, пока не достигнет максимальной глубины стека вызовов.
// Как только стек переполнится, будет сгенерирована ошибка, и функция вернет глубину стека вызовов.
function estimateCallStackDepth(depth = 0) {
  try {
    return estimateCallStackDepth(depth + 1);
  } catch (error) {
    return depth;
  }
}

const callStackDepth = estimateCallStackDepth();
console.log("Глубина стека вызовов: " + callStackDepth);

// В итоге, получились такие результаты:
// Chrome: 9649
// Firefox: 24107
// Opera: 8960
// Safari: нет возможности
