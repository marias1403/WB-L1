// Условие. Реализовать функцию конвертации JSON в строку

// Решение.
// Создаем функцию, которая рекурсивно обходит структуру данных JSON без использования JSON.stringify.
// Функция поддерживает строки, числа, логические значения, массивы и объекты
function convertJSONToString(obj) {
  if (typeof obj === "string") {
    return `"${obj}"`;
  } else if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return `${obj}`;
  } else if (Array.isArray(obj)) {
    const elements = obj.map((element) => convertJSONToString(element));
    return `[${elements.join(",")}]`;
  } else if (typeof obj === "object") {
    const keys = Object.keys(obj);
    const pairs = keys.map((key) => `"${key}":${convertJSONToString(obj[key])}`);
    return `{${pairs.join(",")}}`;
  } else {
    throw new Error(`Тип данных не поддерживается: ${typeof obj}`);
  }
}
// JSON-объект
const jsonData = {
  name: "Maria",
  age: 25,
  hobbies: ["reading", "drawing"],
  isStudent: true,
  address: {
    city: "Moscow",
    country: "Russia"
  }
};
// Записываем результат выполнения функции
const jsonString = convertJSONToString(jsonData);
console.log(jsonString);
