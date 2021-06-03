function getRandomFromRange (min, max) {
  if ( min < 0 || min > max) {
    throw new Error;
  }
  min = Math.round(min);
  max = Math.round(max);
  return Math.round(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatFromRange (min, max, point) {
  if ( min < 0 || min > max) {
    throw new Error;
  }
  point = Math.pow(10, point);

  min = min*point;
  max = max*point;
  return Math.round((Math.random() * (max - min + 1)) + min)/point;
}

getRandomFromRange(3, 5);
getRandomFloatFromRange(3.7, 4, 1);

//первое решение взято отсюда https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
