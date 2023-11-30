let people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 22 }
];

function comparePeople(a, b) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return a.name.localeCompare(b.name);
  }
}

people.sort(comparePeople);
console.log(people);