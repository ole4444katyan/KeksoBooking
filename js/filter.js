import {
  clearLayers,
  createMarkers
} from './map.js';

const filterForm = document.querySelector('.map__filters');
const houseType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');

const priceMap = (value) => {
  if (value <= 10000) { return 'low'; } else
    if (value >= 10000 && value <= 50000) { return 'middle'; } else
      if (value >= 50000) { return 'high'; }
};

const filterByType = ({ offer }) => {
  if (houseType.value === 'any' || offer.type === houseType.value) {
    return true;
  }
  return false;
};

const filterByPrice = ({ offer }) => {
  if (housePrice.value === 'any' || priceMap(offer.price) === housePrice.value) {
    return true;
  }
  return false;
};

const filterByRooms = ({ offer }) => {
  if (houseRooms.value === 'any' || `${offer.rooms}` === houseRooms.value) {
    return true;
  }
  return false;
};

const filterByGuests = ({ offer }) => {
  if (houseGuests.value === 'any' || `${offer.guests}` === houseGuests.value) {
    return true;
  }
  return false;
};

const filterByFeatures = ({ offer }) => {
  const features = offer.features;
  const inputsCollection = houseFeatures.querySelectorAll('input');
  const inputs = Array.from(inputsCollection);
  const inputsValues = [];
  let result;

  inputs.forEach((input) => {
    if (input.checked) {
      inputsValues.push(input.value);
    }
  });

  console.log(features, inputsValues);
  if (features) {
    result = inputsValues.every((value) => {
      features.includes(value);
      console.log(features.includes(value));
    });
  }
  console.log(result);
};

const filterOffers = (offers) => {
  const result = offers.filter((offer) =>
    filterByType(offer)
    && filterByPrice(offer)
    && filterByRooms(offer)
    && filterByGuests(offer)
    && filterByFeatures(offer)).slice(0, 10);
  return result;
};

const updateOffers = (offers) => {
  clearLayers();
  const filteredOffers = filterOffers(offers);
  createMarkers(filteredOffers);
};


const filterListener = (offers) => {
  filterForm.addEventListener('change', () => updateOffers(offers));
};


export { filterListener };
