import {data} from './generate-data.js';
import {renderCard} from './render-card.js';
import {stateToggleElement} from './page-states.js';

const map = document.querySelector('#map-canvas');

const form = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const formItems = form.querySelectorAll('fieldset');
const mapFlterItems = mapFilterForm.querySelectorAll('select');


stateToggleElement(form, formItems);
stateToggleElement(mapFilterForm, mapFlterItems);

const card = renderCard(data[0]);
map.appendChild(card);
