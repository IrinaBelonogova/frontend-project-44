import game from '../index.js';

const description = 'What is the result of the expression?';

function calculateExpression(expression) {
    const [num1, operation, num2] = expression.split(' ');
    const num1Value = Number(num1);
    const num2Value = Number(num2);
    switch (operation) {
      case '+':
        return num1Value + num2Value;
      case '-':
        return num1Value - num2Value;
        case '*':
        return num1Value * num2Value;
    }
  }
function generateExpression() {
    const operations = ['+', '-', '*'];
    const operationIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[operationIndex];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    return `${num1} ${operation} ${num2}`;
  }

  const getQuestionAndAnswer = () => {
    const question = generateExpression();
    const correctAnswer = calculateExpression(question).toString(); 
    return [question, correctAnswer];
  }

export default () => {
game(description, getQuestionAndAnswer)
}
