//Работа с формой

const form = document.querySelector('.ad-form');
const formItems = form.querySelectorAll('fieldset');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilter = form.querySelectorAll('fieldset');

const deactivatePage = () => {
  form.classList.add('ad-form--disabled');

  formItems.forEach((formItem) => {
    formItem.disabled = true;
  });

  mapFilterForm.classList.add('ad-form--disabled');

  mapFilter.forEach((formItem) => {
    formItem.disabled = true;
  });
};

const activatePage = () => {
  form.classList.remove('ad-form--disabled');

  formItems.forEach((formItem) => {
    formItem.disabled = false;
  });

  mapFilterForm.classList.remove('ad-form--disabled');

  mapFilter.forEach((formItem) => {
    formItem.disabled = false;
  });
};

export {
  deactivatePage,
  activatePage
};
