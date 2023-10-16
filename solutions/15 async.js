// Условие. Задача на асинхронность: напишите асинхронную функцию, которая использует
// ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

// Решение.
// Асинхронная функция, которая ожидает выполнения двух других асинхронных операций.
// В случае успешного выполнения этих операций, она возвращает объект с результатами
async function waitForAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2();

    return {result1, result2};
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}
// Асинхронная операция, представленная в виде функции, которая возвращает промис
// и имитирует задержку в 1 секунду с помощью setTimeout.
// После истечения времени она выполняет промис, возвращая строку.
async function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат первой асинхронной операции");
    }, 1000);
  });
}
// Аналогичная первой функции
async function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат второй асинхронной операции");
    }, 1000);
  });
}
// Здесь вызывается waitForAsyncOperations(), и после выполнения всех асинхронных операций,
// либо успешно, либо с ошибкой, применяются методы then и catch для обработки результата или ошибки
waitForAsyncOperations()
  .then((result) => {
    console.log("Результат выполнения асинхронной функции:", result);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
