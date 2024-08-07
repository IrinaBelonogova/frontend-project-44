import game from '../index.js';
import getRandomNumber from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const currectAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, currectAnswer];
};
export default () => {
  game(description, getQuestionAndAnswer);
};
