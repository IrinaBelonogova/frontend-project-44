import game from '../index.js';
import getRandomNumber from '../random.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = 10;

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression[i] = start + i * step;
  }

  const missingIndex = getRandomNumber(0, length - 1);
  const answer = progression[missingIndex];
  progression[missingIndex] = '..';

  return { progression: progression.join(' '), answer };
};

const getQuestionAndAnswer = () => {
  const { progression, answer } = generateProgression();
  const currectAnswer = answer.toString();
  return [progression, currectAnswer];
};

export default () => {
game(description, getQuestionAndAnswer)
}
