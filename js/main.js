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

getRandomFromRange(3.2, 4);
getRandomFloatFromRange(3.7, 4, 2);

//первое решение взято отсюда https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];


/*const arrayForAvatar = [];
for (let i = 1; i <= 8; i++) {
  arrayForAvatar.push(i);
};

const arrayforTitle = [];
for (let i = 1; i <= 100; i++) {
  arrayforTitle.push(i);
};

const createAvatar = () => {
  let index = getRandomFromRange(0, arrayForAvatar.length - 1);
  advertisement.author.avatar = 'img/avatars/user0' + arrayForAvatar[index] + '.png';
  arrayForAvatar.splice(index, 1);
  console.log(arrayForAvatar)
};


const createTitle = () => {
  let index = getRandomFromRange(0, arrayforTitle.length - 1);
  'Объявление номер ' + arrayforTitle[index];
  arrayforTitle.splice(index, 1);
};*/

const createAvatar = () => {

};
createAvatar;

const createAddress = () => {

};
createAddress;

const createPrice = () => (getRandomFromRange(1, 50000));

const createType = () => TYPE[getRandomFromRange(0, (TYPE.length - 1))];

const createRooms = () => getRandomFromRange(1, 10);

const createGuests = () => getRandomFromRange(1, 15);

const createCheckin = () => CHECKIN[getRandomFromRange(0, (CHECKIN.length - 1))];

const createCheckout = () => CHECKOUT[getRandomFromRange(0, (CHECKOUT.length - 1))];

const createFeatures = () => {
  let minIndex = getRandomFromRange(0, 7);
  let maxIndex = getRandomFromRange(1, 7);
  if (minIndex === maxIndex) {
    maxIndex++;
  }
  if (minIndex > maxIndex) {
    minIndex = 0;
    maxIndex++;
  }
  return FEATURES.slice(minIndex, maxIndex);
};

const createPhotos = () => {
  let minIndex = getRandomFromRange(0, 4);
  let maxIndex = getRandomFromRange(1, 4);
  if (minIndex === maxIndex) {
    maxIndex++;
  }
  if (minIndex > maxIndex) {
    minIndex = 0;
    maxIndex++;
  }
  return PHOTOS.slice(minIndex, maxIndex);
};

const createLat = () => getRandomFloatFromRange(35.65000, 35.70000, 5);

const createLng = () => getRandomFloatFromRange(139.70000, 139.80000, 5);


const advertisement = () => {

  const lat = createLat();
  const lng = createLng();
  return {
    author: {
      avatar: '',
    },
    offer: {
      title: '',
      address: `${lat  }, ${  lng}`,
      price: createPrice(),
      type: createType(),
      rooms: createRooms(),
      guests: createGuests(),
      checkin: createCheckin(),
      checkout: createCheckout(),
      features: createFeatures(),
      description: 'Очень крутое помещение',
      photos: createPhotos(),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};
advertisement;


/*
const array = {
  author:{
    avatar: ''
  }
  offer:{
    title: '',

    address: '',

    price: 0,

    type: '',

    rooms: 0,

    guests: 0,

    checkin: '',

    checkout: '',

    features: [''],

    description: '',

    photos: ['']
  }
  location:{
    lat: 0,
    lng: 0
  }
}

    напишите функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

    Структура каждого объекта должна быть следующей:

    author, объект — описывает автора. Содержит одно поле:

    avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.

    offer, объект — содержит информацию об объявлении. Состоит из полей:

    title, строка — заголовок предложения. Придумайте самостоятельно.

    address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

    price, число — стоимость. Случайное целое положительное число.

    type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

    rooms, число — количество комнат. Случайное целое положительное число.

    guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

    checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

    description, строка — описание помещения. Придумайте самостоятельно.

    photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

    location, объект — местоположение в виде географических координат. Состоит из двух полей:

    lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

    lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

    */
