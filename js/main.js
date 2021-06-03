const getRandomFromRange = (min, max) => {
  if ( min < 0 || min > max) {
    throw new Error ('Минимальное значение отрицательное или больше максимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatFromRange = (min, max, point) => {
  if ( min < 0 || min > max) {
    throw new Error ('Минимальное значение отрицательное или больше максимального');
  }

  point = Math.pow(10, point);

  min *= point;
  max *= point;
  return Math.round((Math.random() * (max - min + 1)) + min)/point;
};

getRandomFromRange(3.2, 4);
getRandomFloatFromRange(3.7, 4, 2);

//первое решение взято отсюда https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
