function createClosure() {
  let externalVar = 'Внешняя переменная';
  function internalFunc() {
    console.log(externalVar);
  }
  return internalFunc;
}

const closure = createClosure();
closure(); // Выведет "Внешняя переменная"