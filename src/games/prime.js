import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  const getQuestionAndAnswer = () => {
    const question = getRandomInt (100);
    const currectAnswer = isPrime(question) ? 'yes' : 'no'
      return [question, currectAnswer]
  }
  export default () => {
  game(description, getQuestionAndAnswer);
  }
