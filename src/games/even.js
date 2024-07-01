import game from '../index.js';
import getRandomNumber from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 9);
  const currectAnswer = isEven(question) ? 'yes' : 'no'
    return [question, currectAnswer]
}
export default () => {
game(description, getQuestionAndAnswer);
}
