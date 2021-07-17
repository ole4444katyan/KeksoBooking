import { stateTogglePage } from './page-states.js';
import { setFormListeners } from './form-validation.js';
import {
  initMap,
  createMarkers,
  resetMap
} from './map.js';

const resetButton = document.querySelector('.ad-form__reset');

stateTogglePage(false);

initMap();
createMarkers();
resetMap(resetButton);

setFormListeners();
