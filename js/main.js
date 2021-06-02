function getRandomFromRange (min, max) {
  if ( min > 0 && min < max) {
  min = Math.round(min);
  max = Math.round(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error;
}

//решение взято отсюда https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
