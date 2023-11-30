// Оптимальный
function isPalindrome(string) {
  string = string.replace(/ /g, '').toLowerCase();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
isPalindrome('Аргентина манит негра');

// Неоптимальный
function isPalindrome2(string) {
  string = string.replace(/ /g, '').toLowerCase();
  console.log(string === string.split('').reverse().join(''));
}
isPalindrome2('Аргентина манит негра');