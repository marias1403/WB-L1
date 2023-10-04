// Условие. Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра »).

// Решение. Есть два способа решения задачи: неоптимальный и оптимальный
// Оптимальное решение задачи заключается в том, чтобы решить задачу с помощью указателей (pointers)
// В неоптимальном решении применяются встроенные методы .split("").reverse().join("")
// Ниже приведено оптимальное решение c использованием двух указателей
function isPalindromeOptimal(string) {
  // Удаляем пробелы из строки и приводим все символы к нижнему регистру
  string = string.replace(/ /g, "").toLowerCase();

  // Инициализируем два указателя: один указывает на начало строки, а другой на конец
  let left = 0;
  let right = string.length - 1;

  // Пока указатели не встретятся (или пересекутся), продолжаем проверку
  while (left < right) {
    // Если символы на позициях left и right не совпадают, это не палиндром
    if (string[left] !== string[right]) {
      return false;
    }

    // Сдвигаем указатели к центру строки
    left++;
    right--;
  }

  // Если цикл завершился, значит, строка является палиндромом
  return true;
}

isPalindromeOptimal("Аргентина манит негра");
isPalindromeOptimal("Эта строка не палидром");

// Ниже приведено неоптимальное решение
function isPalindromeSuboptimal(string) {
  // Удаляем пробелы из строки и приводим все символы к нижнему регистру
  string = string.replace(/ /g, "").toLowerCase();

  // Сравниваем строку с её обратным порядком
  // Метод split преобразует строку str в массив символов
  // Метод reverse меняет порядок элементов массива на обратный
  // Метод join объединяет элементы массива в строку, используя пустую строку "" в качестве разделителя
  return string === string.split("").reverse().join("");
}

isPalindromeSuboptimal("Аргентина манит негра");
isPalindromeSuboptimal("Эта строка не палидром")
