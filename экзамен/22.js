let count = 0;
function recursiveDocumentWrite() {
  console.log(count++);
  document.write(recursiveDocumentWrite());
}
recursiveDocumentWrite();