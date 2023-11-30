// Функция для вызова функций по порядку
async function executeFuncByOrder(functions) {
  for (let i = 0; i < functions.length; i++) {
    await new Promise((resolve) => {
      functions[i](i, resolve);
    });
  }
}


// массив функций
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
]

executeFuncByOrder(functions);