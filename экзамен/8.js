// Замыкание
function executeFunctions(functions) {
  return function() {
    const results = [];
    for (const func of functions) {
      results.push(func());
    }
    return results;
  }
}
// Функции
const func1 = () => 1 + 2;
const func2 = () => 3 * 4;
const func3 = () => Math.pow(2, 3);
// Массив функция
const arrayOfFunctions = [func1, func2, func3];
const combinedFunctions = executeFunctions(arrayOfFunctions);
const result = combinedFunctions();
console.log(result);