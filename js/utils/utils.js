//Утилитарные функции

const getRandomFromRange = (min, max) => {
  if (min < 0 || min > max) {
    throw new Error('Минимальное значение отрицательное или больше максимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatFromRange = (min, max, point) => {
  if (min < 0 || min > max) {
    throw new Error('Минимальное значение отрицательное или больше максимального');
  }

  point = Math.pow(10, point);

  min *= point;
  max *= point;
  return Math.round((Math.random() * (max - min + 1)) + min) / point;
};

const createRandomElement = (arr) => arr[getRandomFromRange(0, (arr.length - 1))];

const createRandomArray = (arr) => {
  let minIndex = getRandomFromRange(0, (arr.length - 1));
  let maxIndex = getRandomFromRange(1, (arr.length));

  if (minIndex === maxIndex) {
    maxIndex--;
  }
  if (minIndex > maxIndex) {
    minIndex = 0;
  }
  return arr.slice(minIndex, maxIndex);
};

const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

export {
  getRandomFromRange,
  getRandomFloatFromRange,
  createRandomElement,
  createRandomArray,
  sklonenie
};
