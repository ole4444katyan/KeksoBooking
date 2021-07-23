import { resetForm } from './form-validation.js';
import { resetMap } from './map.js';
import { resetFilters } from './filter.js';

const reset = () => {
  resetForm();
  resetMap();
  resetFilters();
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  reset();
});

export {
  reset
};


