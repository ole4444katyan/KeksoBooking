import {
  clearLayers,
  createMarkers
} from './map.js';
import {debounce} from './utils/debounce.js';

const MIN_ADVERTS = 0;
const MAX_ADVERTS = 10;

const filterForm = document.querySelector('.map__filters');
const houseType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');

const priceMap = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: Infinity,
  },
  any: {
    min: 0,
    max: Infinity,
  },
};


const filterByType = ({ offer }) => {
  if (houseType.value === 'any' || offer.type === houseType.value) {
    return true;
  }
  return false;
};

const filterByPrice = ({ offer }) => {
  if (housePrice.value === 'any' || (offer.price >= priceMap[housePrice.value].min && offer.price <= priceMap[housePrice.value].max)) {
    return true;
  }
  return false;
};

const filterByRooms = ({ offer }) => {
  if (houseRooms.value === 'any' || offer.rooms === Number(houseRooms.value)) {
    return true;
  }
  return false;
};

const filterByGuests = ({ offer }) => {
  if (houseGuests.value === 'any' || offer.guests === Number(houseGuests.value)) {
    return true;
  }
  return false;
};

const filterByFeatures = ({ offer }) => {
  const features = offer.features;

  const inputsCollection = houseFeatures.querySelectorAll('input:checked');

  if (features) {
    const result = Array.from(inputsCollection).every((checkbox) => features.includes(checkbox.value));

    return result;
  }

};

const filterOffers = (offers) => (
  offers
    .filter((offer) =>
      filterByType(offer)
      && filterByPrice(offer)
      && filterByRooms(offer)
      && filterByGuests(offer)
      && filterByFeatures(offer))
    .slice(MIN_ADVERTS, MAX_ADVERTS)
);

const updateOffers = (offers) => {
  clearLayers();
  const filteredOffers = filterOffers(offers);
  createMarkers(filteredOffers);
};


const filterListener = (offers) => {
  filterForm.addEventListener('change', debounce(() => updateOffers(offers)));
};


export { filterListener };
