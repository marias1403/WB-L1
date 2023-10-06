// Создаем модуль с функцией изменения окончания слов
const Pluralize = (number, words) => {
  // Проверяем, что передано правильное количество слов
  if (words.length !== 3) {
    throw new Error('Ожидается массив из трех слов');
  }

  // Определяем падеж в зависимости от остатка при делении числа на 10 и 100
  const mod10 = number % 10;
  const mod100 = number % 100;

  // Выбираем правильное слово для соответствующего падежа и числа
  if (mod10 === 1 && mod100 !== 11) {
    return `${number} ${words[0]}`;
  } else if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
    return `${number} ${words[1]}`;
  } else {
    return `${number} ${words[2]}`;
  }
};

// Экспортируем модуль
module.exports = russianPluralize;

// Импортируем модуль
const Pluralize = require('./Pluralize');

// Примеры использования
console.log(Pluralize(112, ['сообщение', 'сообщения', 'сообщений'])); // 112 сообщений
console.log(Pluralize(12, ['сообщение', 'сообщения', 'сообщений'])); // 12 сообщений
console.log(Pluralize(1, ['сообщение', 'сообщения', 'сообщений'])); // 1 сообщение
console.log(Pluralize(1024, ['пользователь', 'пользователя', 'пользователей'])); // 1024 пользователя
console.log(Pluralize(1026, ['пользователь', 'пользователя', 'пользователей'])); // 1026 пользователей
console.log(Pluralize(121, ['пользователь', 'пользователя', 'пользователей'])); // 121 пользователь
