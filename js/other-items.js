//Сравнение с похожими объявлениями

import {
  createMarker,
  map
} from './map.js';
import { data } from './generate-data.js';
import { renderCard } from './render-card.js';

const markerGroup = L.layerGroup().addTo(map);

const createSimilatMarker = () => {
  data.forEach((obj) => {
    const popup = renderCard(obj);
    createMarker(obj.location, popup, markerGroup);
  });
};


export { createSimilatMarker };


