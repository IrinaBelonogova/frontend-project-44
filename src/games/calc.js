import game from '../index.js';
import getRandomNumber from '../random.js';

/*const description = 'What is the result of the expression?';
  const calculateExpression = (expression) => {
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
      default:
        throw new Error(`Unknown operation: ${operation}`);
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
    const question = getRandomNumber();
    const correctAnswer = calculateExpression(question).toString(); 
    return [question, correctAnswer];
  }*/
const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';
    
  const getRandomOperationSymbol = (symbols) => {
  const randomIndex = getRandomNumber(0, symbols.length);
  const randomSymbol = symbols[randomIndex];
    return randomSymbol;
  };
    
  const calculateOperations = (symbol, firstValue, secondValue) => {
    switch (symbol) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      default:
        return null;
      }
    };
    const getQuestionAndAnswer = () => {
      const randomSymbol = getRandomOperationSymbol(operationSymbols);
      const firstNumber = getRandomNumber(0, 50);
      const secondNumber = getRandomNumber(0, 50);
    
      const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
      const correctAnswer = String(calculateOperations(randomSymbol, firstNumber, secondNumber));
    
      return [question, correctAnswer];
    };

export default () => {
game(description, getQuestionAndAnswer)
}
