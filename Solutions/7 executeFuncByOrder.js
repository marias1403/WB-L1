// Условие. Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет
// каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции
// должен происходить только после вызова предыдущей функции.

// Решение. В данной задаче используем промисы и функции async/await.
// Каждая функция должна вызвать resolve, чтобы перейти к следующей функции в цикле
async function executeFunctionsByOrder(functions) {
  for (let i = 0; i < functions.length; i++) {
    await new Promise((resolve) => {
      functions[i](i, resolve);
    });
  }
}

// Массив функций
const functions = [
  (index, resolve) => {
    console.log(`Вызвана функция ${index + 1}`);
    setTimeout(resolve, 1000);
  },
  (index, resolve) => {
    console.log(`Вызвана функция ${index + 1}`);
    setTimeout(resolve, 1000);
  },
  (index, resolve) => {
    console.log(`Вызвана функция ${index + 1}`);
    setTimeout(resolve, 1000);
  },
];

executeFunctionsByOrder(functions);
