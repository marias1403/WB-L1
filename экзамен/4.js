const Pluralize = (number, words) => {
  if (words.length !== 3) {
    throw new Error('Ожидается три слова');
  }

  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${number} ${words[0]}`;
  } else if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
    return `${number} ${words[1]}`;
  } else {
    return `${number} ${words[2]}`;
  }
}

module.exports = Pluralize;

const Pluralize = require('./Pluralize');

Pluralize(1, ['сообщение', 'сообщения', 'сообщений']);