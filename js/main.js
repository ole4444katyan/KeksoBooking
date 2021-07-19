import { stateTogglePage } from './page-states.js';
import { setFormListeners } from './form-validation.js';
import { initMap } from './map.js';
import { createMarkers } from './map.js';
import { getData } from './api.js';
import { sendDataListener } from './user-form.js';

const CURRENT_COUNT_OF_ADVERTS = 10;


stateTogglePage(false);
initMap();
setFormListeners();


getData((adverts) => {
  createMarkers(adverts.slice(0, CURRENT_COUNT_OF_ADVERTS));
});

sendDataListener();
