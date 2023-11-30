const rootElement = document.getElementById('__next');
function traverseDOMTree(element, action) {
   action(element);
   for (let i = 0; i < element.children.length; i++) {
     traverseDOMTree(element.children[i], action);
   }
}

if (rootElement) {
  traverseDOMTree(rootElement, function(element) {
    console.log(element.tagName);
  });
} else {
  console.error('Корневой элемент не найден');
}