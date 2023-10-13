// Условие. Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра.
// Затем создайте подклассы, представляющие различные фигуры,
// такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

// Решение.
// Базовый класс Shape
class Shape {
  constructor() {
    // Конструктор базового класса
  }
  // Метод для расчета площади
  calculateArea() {
    // Реализация будет в подклассах
  }
  // Метод для расчета периметра
  calculatePerimeter() {
    // Реализация будет в подклассах
  }
}

// Подкласс Rectangle (Прямоугольник)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  // Реализация методов для расчета площади и периметра для прямоугольника
  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс Circle (Круг)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  // Реализация методов для расчета площади и периметра для круга
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Подкласс Triangle (Треугольник)
class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
  // Реализация методов для расчета площади и периметра для треугольника
  calculateArea() {
    // Используем формулу Герона для расчета площади треугольника
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  calculatePerimeter() {
    return this.a + this.b + this.c;
  }
}

// Примеры использования классов
const rectangle = new Rectangle(5, 10);
console.log('Площадь прямоугольника:', rectangle.calculateArea());
console.log('Периметр прямоугольника:', rectangle.calculatePerimeter());

const circle = new Circle(7);
console.log('Площадь круга:', circle.calculateArea());
console.log('Длина окружности круга:', circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log('Площадь треугольника:', triangle.calculateArea());
console.log('Периметр треугольника:', triangle.calculatePerimeter());
