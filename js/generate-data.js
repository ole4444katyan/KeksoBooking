//Генерация временных данных объявлений

import {
  getRandomFromRange,
  getRandomFloatFromRange,
  createRandomElement,
  createRandomArray
} from './utils/utils.js';


const NUMBER_REQUIRED_ELEMENS = 10;

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];

const MIN_PRICE = 1;
const MAX_PRICE = 50000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const POINT = 5;


const createAdvert = (index) => {
  index++;
  const lat = getRandomFloatFromRange(MIN_LAT, MAX_LAT, POINT);
  const lng = getRandomFloatFromRange(MIN_LNG, MAX_LNG, POINT);

  return {
    author: {
      avatar: (index < 10) ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`,
    },
    offer: {
      title: `Заголовок ${index}`,
      address: `${lat}, ${lng}`,
      price: getRandomFromRange(MIN_PRICE, MAX_PRICE),
      type: createRandomElement(TYPES),
      rooms: getRandomFromRange(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomFromRange(MIN_GUESTS, MAX_GUESTS),
      checkin: createRandomElement(CHECKINS),
      checkout: createRandomElement(CHECKOUTS),
      features: createRandomArray(FEATURES),
      description: `Очень крутое помещение ${index}`,
      photos: createRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const createSimilarAdverts = (count) => new Array(count).fill(null).map((item, index) => createAdvert(index));
const data = createSimilarAdverts(NUMBER_REQUIRED_ELEMENS);

export {data};
