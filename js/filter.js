import {
  removeMarkers,
  createMarkers
} from './map.js';

const filterForm = document.querySelector('.map__filters');
const houseType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');


const clearMarkers = () => {
  removeMarkers();
};


const filterOffers = (offers) => {
  const filterFunction = (element) => {
    const {
      type,
    } = element.offer;
    if (type === 'hotel') {
      return element;
    }
  };
  const filteredOffers = offers.filter(filterFunction);
  return filteredOffers;
};

const renderMarkers = (offers) => {
  createMarkers(offers);
};

const updateOffers = (offers) => {
  clearMarkers();

  const filteredOffers = filterOffers(offers);
  renderMarkers(filteredOffers);
  console.log(filteredOffers);
};


const filterHandler = (offers) => {
  filterForm.addEventListener('change', () => updateOffers(offers));
};


export { filterHandler };
