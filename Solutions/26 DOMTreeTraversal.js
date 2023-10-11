// Условие. Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM,
// начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например,
// выводить информацию о теге в консоль).

// Решение.
function traverseDOM(element, action) {
  // Выполняем действие для текущего элемента
  action(element);

  // Рекурсивно обходим дочерние элементы
  for (let i = 0; i < element.children.length; i++) {
    traverseDOM(element.children[i], action);
  }
}

// Пример использования функции для вывода информации о тегах в консоль
const rootElement = document.getElementById('root'); // Замените 'root' на ID вашего корневого элемента
traverseDOM(rootElement, function(element) {
  console.log(element.tagName);
});
