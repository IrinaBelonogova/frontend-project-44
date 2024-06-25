import game from '../index.js';

const description = "What number is missing in the progression?";

const generateProgression = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);
  
    const progression = [];
    for (let i = 0; i < length; i++) {
      progression[i] = start + i * step;
    }
  
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
  
    return { progression, answer };
  }

  const getQuestionAndAnswer = () => {
    const question = generateProgression();
    const currectAnswer = question.answer.toString();
      return [question.progression, currectAnswer]
  }

export default () => {
game (description, getQuestionAndAnswer)
}