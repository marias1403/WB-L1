// Условие. Разработайте функцию преобразования JSON в связный список.
// На входе функция должна получать JSON, содержащий список объектов, на выходе объект,
// представляющий собой односвязный список.

// Решение.
// Создаем класс для представления узла связного списка
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Создаем класс для представления самого связного списка с методом append,
// который добавляет элемент в конец связного списка
class LinkedList{
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}
// Функция принимает JSON-массив и преобразует его в связный список,
// добавляя каждый элемент в конец списка с помощью метода append
function jsonToLinkedList(jsonData) {
  const linkedList = new LinkedList();
  jsonData.forEach(item => {
    linkedList.append(item);
  });
  return linkedList;
}
// Пример использования
const jsonData = [1, 2, 3, 4, 5];
const linkedList = jsonToLinkedList(jsonData);
console.log(linkedList);
