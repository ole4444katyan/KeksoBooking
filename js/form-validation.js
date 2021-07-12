//Валидация формы

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

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
  titleInput.addEventListener('input', () => {
    const titleLength = titleInput.value.length;
    if (titleLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Сделайте заголовок подлиннее, пожалуйста. Еще ${MIN_TITLE_LENGTH - titleLength} симв.`);
    } else if (titleLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Удалите лишие ${titleLength - MAX_TITLE_LENGTH} симв.`);
    } else if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity('Напишите что-нибудь');
    } else {
      titleInput.setCustomValidity('');
    }

    titleInput.reportValidity();
  });
};

const onTypeSelectChanger = () => {
  typeSelect.addEventListener('change', () => {

    const type = typeSelect.value;
    const availablePrice = typePrice[type];

    priceInput.min = availablePrice;
    priceInput.placeholder = `${availablePrice}`;

  });
};

const onPriceValidator = () => {
  priceInput.addEventListener('input', () => {
    const priceValue = priceInput.value;
    const priceMin = priceInput.min;

    if (parseInt(priceValue, 10) < parseInt(priceMin, 10)) {
      priceInput.setCustomValidity(`Для этого жилья минимальная сумма ${priceMin}`);
    } else if (titleInput.validity.valueMissing) {
      priceInput.setCustomValidity('Укажите цену');
    } else {
      priceInput.setCustomValidity('');
    }


    priceInput.reportValidity();
  });
};

const onRoomSelectChanger = () => {
  roomSelect.addEventListener('change', () => {
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
  });
};

const ontimeSelectorChanger = (selectActive, selectPassive) => {
  selectActive.addEventListener('change', () => {
    selectPassive.value = selectActive.value;
  });
};

const setFormListeners = () => {
  onTitleValidator();
  onPriceValidator();
  onRoomSelectChanger();
  onTypeSelectChanger();
  ontimeSelectorChanger(timeInSelect, timeOutSelect);
  ontimeSelectorChanger(timeOutSelect, timeInSelect);
};


export { setFormListeners };
