// Класс для узла связного списка
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Класс связного списка
class LinkedList {
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
// Функция-преобразователь
function jsonToLinkedList(jsonData) {
  const linkedList =  new LinkedList();
  jsonData.forEach((item) => {
    linkedList.append(item);
  });
  return linkedList;
}


const jsonData = [1, 2, 3, 4, 5];
const linkedList = jsonToLinkedList(jsonData);
console.log(linkedList);