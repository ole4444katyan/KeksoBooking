/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
//Генерация разметки объявлений
/* eslint-disable no-console */

import {
  data
} from './generate-data.js';

import {
  createCapacity
} from './utils/utils.js';

const advertsList = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');


const arrayAdvertsData = data;

const SIGNATURES_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

arrayAdvertsData.forEach(({
  author,
  offer,
}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = SIGNATURES_TYPES[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = createCapacity(offer.rooms, offer.guests);
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featuresItems = cardElement.querySelector('.popup__features').querySelectorAll('.popup__feature');
  const classes = offer.features.map((feature) => `popup__feature--${feature}`);


  featuresItems.forEach((feature) => {
    const needfulClass = feature.classList[1];

    if (!classes.includes(needfulClass)) {
      feature.remove();
    }
  });

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photosList = cardElement.querySelector('.popup__photos');
  photosList.innerHTML = '';
  console.log(offer.photos.length);

  if (offer.photos.length > 0) {

    for (let i = 0; i < offer.photos.length; i++) {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.width = '45';
      img.height = '40';
      img.alt = 'Фотография жилья';
      img.src = offer.photos[i];
      photosList.appendChild(img);
    }
  }

  cardElement.querySelector('.popup__avatar').src = author.avatar;

  advertsList.appendChild(cardElement);
});


console.log(advertsList);
