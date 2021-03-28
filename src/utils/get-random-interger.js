import random from 'lodash/random';

const getRandomInteger = (multiplier, min, max) => {
  const result = random(1, 9) * multiplier || 1;
  if (min && result < min) {
    return min;
  }
  if (max && result > max) {
    return max;
  }
  return result;
};

export default getRandomInteger;
