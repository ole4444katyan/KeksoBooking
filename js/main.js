//Точка входа

import {data} from './generate-data.js';
import './render-cards.js';
import {
  deactivatePage,
  activatePage
} from './form.js';

deactivatePage();
activatePage();
// eslint-disable-next-line no-console
console.log(data);
