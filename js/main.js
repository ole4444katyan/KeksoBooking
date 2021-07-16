// import { data } from './generate-data.js';
// import { renderCard } from './render-card.js';
import { stateTogglePage } from './page-states.js';
import { setFormListeners } from './form-validation.js';
import { mapFunctions } from './map.js';
import { createSimilatMarker } from './other-items.js';


stateTogglePage(false);

mapFunctions();

createSimilatMarker();


// const card = renderCard(data[0]);
// map.appendChild(card);


setFormListeners();
