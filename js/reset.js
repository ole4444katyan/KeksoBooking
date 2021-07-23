import { resetForm } from './form-validation.js';
import { resetMap } from './map.js';
<<<<<<< HEAD
import { resetFilters } from './filter.js';
=======
>>>>>>> d5e0bf1fa1b88bf6455c81c345a6a5f1d37544bb

const reset = () => {
  resetForm();
  resetMap();
<<<<<<< HEAD
  resetFilters();
=======
>>>>>>> d5e0bf1fa1b88bf6455c81c345a6a5f1d37544bb
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  reset();
});

export {
  reset
};


