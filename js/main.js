import {data} from './generate-data.js';
import {renderCard} from './render-card.js';
import {stateTogglePage} from './page-states.js';
import {
  onRoomSelectorChange,
  onTypeSelectorChange,
  onTimeInChange,
  onTimeOutChange
} from './form-validation.js';

const map = document.querySelector('#map-canvas');

const card = renderCard(data[0]);
map.appendChild(card);

stateTogglePage(false);
stateTogglePage(true);

onRoomSelectorChange();
onTypeSelectorChange();

onTimeInChange();
onTimeOutChange();
