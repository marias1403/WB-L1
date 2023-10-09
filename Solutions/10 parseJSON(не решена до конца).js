// Условие. Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидацией.

// Решение. Напишем функцию ручного парсинга строки
function parseJSON(jsonString) {
  // Удаляем пробелы
  jsonString = jsonString.trim();

  // Проверяем, что строка начинается с "{" и заканчивается "}"
  if (jsonString[0] !== "{" || jsonString[jsonString.length - 1] !== "}") {
    throw new Error('Invalid JSON: JSON object must start with "{" and end with "}"');
  }

  let keyValuePairs = [];

// Регулярное выражение для поиска пар ключ-значение в JSON-строке
  const regex = /"([^"]+)":\s*("[^"]*"|(?:\d+\.?\d*|\.\d+|true|false|null|\{[^{}]*\}|\[[^\[\]]*\]))(?=[,}\]])/g;

  let match;
  while ((match = regex.exec(jsonString)) !== null) {
    const key = match[1];
    let value = match[2];

    // Если значение - строка, уберем кавычки
    if (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
      value = value.slice(1, -1);
    }
    keyValuePairs.push(`${key}: ${value}`);
  }

  // Создаем пустой объект JSON
  const jsonObject = {};

  // Проходимся по каждой паре ключ-значение и добавляем их в объект JSON
  for (const pair of keyValuePairs) {
    // Разделяем пару ключ-значение по символу ':'
    const [key, value] = pair.split(':');

    // Удаляем начальные и конечные пробелы у ключа и значения
    const cleanedKey = key.trim();
    let cleanedValue = value.trim();

    // Пытаемся преобразовать значение в JSON (число, строку или логическое значение)
    let parsedValue;
    if (cleanedValue === 'null') {
      parsedValue = null;
    } else if (cleanedValue === 'true') {
      parsedValue = true;
    } else if (cleanedValue === 'false') {
      parsedValue = false;
    } else if (!isNaN(cleanedValue)) {
      parsedValue = parseFloat(cleanedValue);
    } else if (cleanedValue.startsWith('[') && cleanedValue.endsWith(']')) {
      parsedValue = cleanedValue.slice(1, -1).split(',').map((item) => item.trim().replace(/["']/g, ''));
    } else if (typeof cleanedValue === 'string') {
      parsedValue = cleanedValue;
    } else {
      throw new Error('Invalid JSON: Invalid value format.');
    }
    jsonObject[cleanedKey] = parsedValue;
  }
  return jsonObject;
}
// Строка для парсинга
const string = '{"name":"Maria","age":25,"hobbies":["reading","drawing"],"isStudent":true,"address":{"city":"Moscow","country":"Russia"}}';
// Используем конструкцию "try...catch" для обработки ошибок при их наличии
try {
  const parsedJSON = parseJSON(string);
  console.log(parsedJSON);
} catch (error) {
  console.error('Error:', error.message);
}
