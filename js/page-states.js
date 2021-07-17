//Переключение состояния страницы


const stateToggleElement = (element, items, state) => {

  if (state) {
    element.classList.add('ad-form--disabled');
    items.forEach((item) => {
      item.disabled = true;
    });
  }

  element.classList.toggle('ad-form--disabled');

  items.forEach((item) => {
    item.disabled = item.disabled !== true;
  });
};


const form = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const formItems = form.querySelectorAll('fieldset');
const mapFlterItems = mapFilterForm.querySelectorAll('select');

const stateToggleForm = (state) => stateToggleElement(form, formItems, state);
const stateToggleFilterForm = (state) => stateToggleElement(mapFilterForm, mapFlterItems, state);

const stateTogglePage = (state) => {
  stateToggleForm(state);
  stateToggleFilterForm(state);
};


export { stateTogglePage };
