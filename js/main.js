import {data} from './generate-data.js';
import {renderCard} from './render-card.js';
import {stateTogglePage} from './page-states.js';
import './limits.js';
import './form-validation.js';

const map = document.querySelector('#map-canvas');

const card = renderCard(data[0]);
map.appendChild(card);


stateTogglePage(true);
