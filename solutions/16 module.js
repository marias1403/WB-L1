// Условие. Задача на модули и использование внешних библиотек:
// напишите модуль, который экспортирует функцию для работы с датами.
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

// Решение.
// Установка библиотеки командой npm install moment --save
// Код для модуля:
const moment = require("moment");
// Функция для форматирования даты с использованием Moment.js
function formatDate(date, format) {
  return moment(date).format(format);
}
// Функция для добавления дней к дате с использованием Moment.js
function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}
// Экспортируем функции, чтобы их можно было использовать извне модуля
module.exports = {
  formatDate,
  addDays,
};

// Импортируем модуль
const dateModule = require('./dateModule'); // Замените путь на правильный путь к вашему модулю

const currentDate = new Date();

const formattedDate = dateModule.formatDate(currentDate, 'YYYY-MM-DD');
console.log(`Форматированная дата: ${formattedDate}`);

const newDate = dateModule.addDays(currentDate, 7);
console.log(`Дата через 7 дней: ${newDate}`);
