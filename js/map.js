//Карта

import { stateTogglePage } from './page-states.js';
import { data } from './generate-data.js';
import { renderCard } from './render-card.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const LAT_LNG_DEFAULT = {
  lat: 35.681700,
  lng: 139.753891,
};
const ZOOM_DEFAULT = 10;

const MAIN_MARKER_SIZE = 52;
const MARKER_SIZE = 40;

const addressInput = document.querySelector('#address');

addressInput.value = `${LAT_LNG_DEFAULT.lat}, ${LAT_LNG_DEFAULT.lng}`;

const map = L.map('map-canvas');
let mainMarker;


const createMainMarker = () => {

  const mainMarkerPin = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [MAIN_MARKER_SIZE, MAIN_MARKER_SIZE],
    iconAnchor: [MAIN_MARKER_SIZE / 2, MAIN_MARKER_SIZE],
  });

  mainMarker = L.marker(
    LAT_LNG_DEFAULT,
    {
      draggable: true,
      icon: mainMarkerPin,
    },
  );

  mainMarker.addTo(map);

  mainMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });

};

const initMap = () => {
  map
    .on('load', () => {
      stateTogglePage(true);
    })
    .setView(LAT_LNG_DEFAULT, ZOOM_DEFAULT);


  L.tileLayer(TILE_LAYER,
    {
      attribution: COPYRIGHT_ATTRIBUTE,
    },
  ).addTo(map);

  createMainMarker();
};


const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offer, group) => {
  const {
    lat,
    lng,
  } = offer.location;

  const markerPin = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [MARKER_SIZE, MARKER_SIZE],
    iconAnchor: [MARKER_SIZE / 2, MARKER_SIZE],
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

  marker.bindPopup(renderCard(offer));

  marker.addTo(group);
};

const createMarkers = () => {
  data.forEach((item) => {
    createMarker(item, markerGroup);
  });
};

const resetMap = (resetButton) => {
  resetButton.addEventListener('click', () => {
    map.setView(LAT_LNG_DEFAULT, ZOOM_DEFAULT);
    mainMarker.setLatLng(LAT_LNG_DEFAULT);

<<<<<<< HEAD
  });
=======
const onLoadSuccess = (adverts) => {
  const currentAdverts = adverts.slice(0, CURRENT_COUNT_OF_ADVERTS);
  createMarkers(currentAdverts);
  filterListener(adverts);
};

const onLoadError = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Ошибка сервера, попробуйте перезагрузить страницу';
  document.body.append(alertContainer);
};

const initMap = () => {
  map
    .on('load', () => {
      stateTogglePage(true);
      getData(onLoadSuccess, onLoadError);
    })
    .setView(LAT_LNG_DEFAULT, ZOOM_DEFAULT);


  L.tileLayer(TILE_LAYER,
    {
      attribution: COPYRIGHT_ATTRIBUTE,
    },
  ).addTo(map);

  createMainMarker();
};


const resetMap = () => {
  map.setView(LAT_LNG_DEFAULT, ZOOM_DEFAULT);
  mainMarker.setLatLng(LAT_LNG_DEFAULT);
  addressInputDefault();
  getData(onLoadSuccess, onLoadError);
>>>>>>> d127213 (Пофиксила очистку)
};


export {
  initMap,
  createMarkers,
  resetMap
};
