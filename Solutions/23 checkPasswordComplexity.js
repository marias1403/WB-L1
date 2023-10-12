// Условие. Анализатор сложности пароля: создайте функцию, которая оценивает сложность
// введенного пользователем пароля. Необходимо анализировать длину пароля, использование
// различных символов, наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

// Решение.
function checkPasswordComplexity(password) {
  const minLength = 8;
  if (password.length < minLength) {
    return "Слишком короткий пароль. Используйте больше " + minLength + " символов";
  }
  const hasDigits = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecials = /[!@#$%^&*]/.test(password);

  let rating = 0;

  if (password.length >= 12) {
    rating += 3;
  } else if (password.length >= 10) {
    rating += 2;
  } else {
    rating += 1;
  }

  if (hasDigits) {
    rating += 2;
  }

  if (hasUppercase) {
    rating += 2;
  }

  if (hasLowercase) {
    rating += 2;
  }

  if (hasSpecials) {
    rating += 3;
  }

  if (rating <= 4) {
    return 'Слабый пароль. Рекомендуется увеличить длину пароля, использовать верхний и нижний регистр, а также специальные символы';
  } else if (rating <= 7) {
    return 'Средний пароль. Используйте больше специальных символов';
  } else {
    return 'Надежный пароль';
  }
}

const password = "9@~1$HMQYE";
const rating = checkPasswordComplexity(password);
console.log(rating);
