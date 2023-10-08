// Условие. Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

// Решение.
function parseJSON() {

}

const string = '{"name":"Maria","age":25,"hobbies":["reading","drawing"],"isStudent":true,"address":{"city":"Moscow","country":"Russia"}}';
try {
  const parsedJSON = parseJSON(string);
  console.log(parsedJSON);
} catch (error) {
  console.error('Error:', error.message);
}
