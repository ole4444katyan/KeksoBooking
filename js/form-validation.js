//Валидация формы

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMAGE_SRC = 'img/muffin-grey.svg';

const form = document.querySelector('.ad-form');

const titleInput = document.querySelector('#title');

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const roomSelect = document.querySelector('#room_number');
const guestsSelect = document.querySelector('#capacity');
const guestsOptions = guestsSelect.querySelectorAll('option');

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const avatarInput = document.querySelector('#avatar');
const avatarImage = document.querySelector('.ad-form-header__preview img');

const photoInput = document.querySelector('#images');
const photoImage = document.querySelector('.ad-form__photo img');


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


const validateTitleInput = () => {

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

const changeTypeSelector = () => {

  const type = typeSelect.value;
  const availablePrice = typePrice[type];

  priceInput.min = availablePrice;
  priceInput.placeholder = `${availablePrice}`;

};

const validatePriceInput = () => {
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

const changeRoomSelector = () => {

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

const changeTimeSelector = (selectActive, selectPassive) => {
  selectPassive.value = selectActive.value;
};

const makePreview = (input, img) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      img.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};


const setFormListeners = () => {
  titleInput.addEventListener('input', validateTitleInput);
  typeSelect.addEventListener('change', changeTypeSelector);
  priceInput.addEventListener('input', validatePriceInput);
  roomSelect.addEventListener('change', changeRoomSelector);
  timeInSelect.addEventListener('change', () => changeTimeSelector(timeInSelect, timeOutSelect));
  timeOutSelect.addEventListener('change', () => changeTimeSelector(timeOutSelect, timeInSelect));
  avatarInput.addEventListener('change', () => makePreview(avatarInput, avatarImage));
  photoInput.addEventListener('change', () => makePreview(photoInput, photoImage));
};

const resetForm = () => {
  form.reset();
  avatarImage.src = IMAGE_SRC;
  photoImage.src = IMAGE_SRC;
};

export {
  setFormListeners,
  resetForm
};
