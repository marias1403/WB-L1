// Условие. Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

// Решение.
// Создаем объект с необходимыми свойствами и методами
let book = {
  title: "",
  author: "",
  yearOfPublication: 0,

  setTitle: function (title) {
    this.title = title;
  },

  getTitle: function () {
    return this.title;
  },

  setAuthor: function (author) {
    this.author = author;
  },

  getAuthor: function () {
    return this.author;
  },

  setYearOfPublication: function (year) {
    this.yearOfPublication = year;
  },

  getYearOfPublication: function () {
    return this.yearOfPublication;
  },
};
// Примеры использования
book.setTitle("Миссис Дэллоуэй");
book.setAuthor("Вирджиния Вулф");
book.setYearOfPublication(1925);

console.log("Название книги:", book.getTitle());
console.log("Автор книги:", book.getAuthor());
console.log("Год публикации книги:", book.getYearOfPublication());
