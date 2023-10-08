// Условие. Задача о замыканиях: напишите функцию, которая будет принимать массив функций
// и возвращать новую функцию, которая вызывает каждую функцию в этом массиве
// и возвращает массив результатов, полученных после вызова каждой функции.

// Решение.
// Функция executeFunctions принимает массив функций functions в качестве аргумента и возвращает другую функцию
// Возвращаемая функция перебирает массив functions и для каждой функции в массиве вызывает ее с помощью func(), добавляя результат в массив results
// После выполнения всех функций в массиве functions, возвращается массив results
// Возвращаемая анонимная функция имеет доступ к внешней переменной functions, это и есть пример замыкания
function executeFunctions(functions) {
  return function() {
    const results = [];
    for (const func of functions) {
      results.push(func());
    }
    return results;
  };
}
// Создаем функции
const func1 = () => 1 + 2;
const func2 = () => 3 * 4;
const func3 = () => Math.pow(2, 3);
// Создаем массив функций
const arrayOfFunctions = [func1, func2, func3];
// Сохраняем функцию в переменную
// Теперь combinedFunction является функцией, которая будет выполнять все функции из массива arrayOfFunctions
const combinedFunction = executeFunctions(arrayOfFunctions);
// Вызываем полученную функцию, чтобы сохранить результат выполнения функции в переменную result
const result = combinedFunction();
// Результат выполнения combinedFunction()
console.log(result); // [3, 12, 8]
