// Условие. Задача на асинхронность: напишите асинхронную функцию, которая использует
// ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

// Решение.
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

async function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат первой асинхронной операции");
    }, 1000);
  });
}

async function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат второй асинхронной операции");
    }, 1000);
  });
}

waitForAsyncOperations()
  .then((result) => {
    console.log("Результат выполнения асинхронной функции:", result);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
