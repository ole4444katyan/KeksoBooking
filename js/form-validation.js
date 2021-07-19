//Валидация формы

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');

const titleInput = document.querySelector('#title');

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const roomSelect = document.querySelector('#room_number');
const guestsSelect = document.querySelector('#capacity');
const guestsOptions = guestsSelect.querySelectorAll('option');

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');


const availableRoomGuest = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const typePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};


const onTitleValidator = () => {

  const titleLength = titleInput.value.length;

  if (titleLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Сделайте заголовок подлиннее, пожалуйста. Еще ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишие ${titleLength - MAX_TITLE_LENGTH} симв.`);
  }

  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Напишите что-нибудь');
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
};

const onTypeSelectChanger = () => {

  const type = typeSelect.value;
  const availablePrice = typePrice[type];

  priceInput.min = availablePrice;
  priceInput.placeholder = `${availablePrice}`;

};

const onPriceValidator = () => {
  const priceValue = priceInput.value;
  const priceMin = priceInput.min;

  if (parseInt(priceValue, 10) < parseInt(priceMin, 10)) {
    priceInput.setCustomValidity(`Для этого жилья минимальная сумма ${priceMin}`);
  } else if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Укажите цену');
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

const onRoomSelectChanger = () => {

  guestsOptions.forEach((option) => {
    option.disabled = false;
  });

  const value = roomSelect.value;
  const availableGuests = availableRoomGuest[value];

  guestsOptions.forEach((option) => {
    const optionValue = parseInt(option.value, 10);

    if (!availableGuests.includes(optionValue)) {

      option.disabled = true;
    }
  });
};

const ontimeSelectorChanger = (selectActive, selectPassive) => {
  selectPassive.value = selectActive.value;
};

const setFormListeners = () => {
  titleInput.addEventListener('input', onTitleValidator);
  typeSelect.addEventListener('change', onTypeSelectChanger);
  priceInput.addEventListener('input', onPriceValidator);
  roomSelect.addEventListener('change', onRoomSelectChanger);
  timeInSelect.addEventListener('change', ontimeSelectorChanger(timeInSelect, timeOutSelect));
  timeOutSelect.addEventListener('change', ontimeSelectorChanger(timeOutSelect, timeInSelect));
};

const resetForm = () => {
  form.reset();
};

export {
  setFormListeners,
  resetForm
};
