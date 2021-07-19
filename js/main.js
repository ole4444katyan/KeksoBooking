import { stateTogglePage } from './page-states.js';
import { setFormListeners } from './form-validation.js';
import { initMap } from './map.js';
import { sendDataListener } from './user-form.js';


stateTogglePage(false);
initMap();
setFormListeners();


sendDataListener();
