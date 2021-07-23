import {
  clearLayers,
  createMarkers
} from './map.js';
<<<<<<< HEAD
import { debounce } from './utils/debounce.js';
=======
import {debounce} from './utils/debounce.js';
>>>>>>> d5e0bf1fa1b88bf6455c81c345a6a5f1d37544bb

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


const filterByType = ({ offer }) => houseType.value === 'any' || offer.type === houseType.value;

const filterByPrice = ({ offer }) => housePrice.value === 'any' || (offer.price >= priceMap[housePrice.value].min && offer.price <= priceMap[housePrice.value].max);

const filterByRooms = ({ offer }) => houseRooms.value === 'any' || offer.rooms === Number(houseRooms.value);

const filterByGuests = ({ offer }) => houseGuests.value === 'any' || offer.guests === Number(houseGuests.value);

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

<<<<<<< HEAD
const resetFilters = () => {
  filterForm.reset();
};

export {
  filterListener,
  resetFilters
};
=======

export { filterListener };
>>>>>>> d5e0bf1fa1b88bf6455c81c345a6a5f1d37544bb
