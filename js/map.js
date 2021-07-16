//Карта

import { stateTogglePage } from './page-states.js';

const adressInput = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

adressInput.value = '35.681700, 139.753891';
const map = L.map('map-canvas');


const createMap = () => {
  map
    .on('load', () => {
      stateTogglePage(true);
    })
    .setView({
      lat: 35.681700,
      lng: 139.753891,
    }, 10);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  resetButton.addEventListener('click', () => {
    map.setView({
      lat: 35.681700,
      lng: 139.753891,
    }, 10);
  });
  return map;
};


const createMainMarker = () => {

  const mainMarkerPin = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainMarker = L.marker(
    {
      lat: 35.681700,
      lng: 139.753891,
    },
    {
      draggable: true,
      icon: mainMarkerPin,
    },
  );

  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    const address = evt.target.getLatLng();
    const point = Math.pow(10, 5);
    const lat = Math.round(address.lat * point) / point;
    const lng = Math.round(address.lng * point) / point;
    adressInput.value = `${lat}, ${lng}`;
  });

  resetButton.addEventListener('click', () => {
    mainMarker.setLatLng({
      lat: 35.681700,
      lng: 139.753891,
    });
  });
};


const createMarker = (location, balloon, group) => {
  const {
    lat,
    lng,
  } = location;

  const markerPin = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      draggable: false,
      icon: markerPin,
    },
  );

  marker.bindPopup(balloon);

  marker.addTo(group);
};


const mapFunctions = () => {
  createMap();
  createMainMarker();
};


export {
  mapFunctions,
  createMainMarker,
  createMarker,
  map
};

