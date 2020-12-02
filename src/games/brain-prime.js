import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isPrimeNum = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeLogic = () => {
  const question = getRandomNum(1, 10);
  const correct = isPrimeNum(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
