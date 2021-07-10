//Валидация формы


const roomSelector = document.querySelector('#room_number');
const guestsSelector = document.querySelector('#capacity');
const guestsOptions = guestsSelector.querySelectorAll('option');

const typeSelector = document.querySelector('#type');
const priceInput = document.querySelector('#price');

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


const onRoomSelectorChange = () => {
  roomSelector.addEventListener('change', () => {
    guestsOptions.forEach((option) => {
      option.disabled = false;
    });

    const value = roomSelector.value;
    const availableGuests = availableRoomGuest[value];

    guestsOptions.forEach((option) => {
      const optionValue = parseInt(option.value, 10);

      if (!availableGuests.includes(optionValue)) {

        option.disabled = true;
      }
    });
  });
};


const onTypeSelectorChange = () => {
  typeSelector.addEventListener('change', () => {

    const type = typeSelector.value;
    const availablePrice = typePrice[type];

    priceInput.min = availablePrice;
    priceInput.placeholder = `${availablePrice}`;

  });
};


const timeInSelector = document.querySelector('#timein');
const timeInOptions = timeInSelector.querySelectorAll('option');

const timeOutSelector = document.querySelector('#timeout');
const timeOutOptions = timeOutSelector.querySelectorAll('option');

const timeSelectorChanger = (selector, options) => {
  selector.addEventListener('change', () => {
    options.forEach((option) => {
      option.selected = false;
    });

    options.forEach((option) => {
      if (option.value === selector.value) {
        option.selected = true;
      }
    });
  });
};

const onTimeInChange = () => {
  timeSelectorChanger(timeInSelector, timeOutOptions);
};

const onTimeOutChange = () => {
  timeSelectorChanger(timeOutSelector, timeInOptions);
};


export {
  onRoomSelectorChange,
  onTypeSelectorChange,
  onTimeInChange,
  onTimeOutChange
};
