import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.'

const generateRandomNumbers = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.ceil(Math.random() * 100);
  return [a, b];
}

const gcd = (...[a, b]) => {

  if (b === 0) {
    return a;
  }
  return gcd(...[b, a % b]);
}
    const getQuestionAndAnswer = () => {
        const question = generateRandomNumbers();
        const currectAnswer = gcd(...question).toString();
          return [question, currectAnswer]
      }

export default () => {
game(description, getQuestionAndAnswer)
}
