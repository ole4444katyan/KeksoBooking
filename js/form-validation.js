//Валидация формы


const roomSelector = document.querySelector('#room_number');
const guestsSelector = document.querySelector('#capacity');

const roomOptions = roomSelector.querySelectorAll('option');
const guestsOptions = guestsSelector.querySelectorAll('option');


guestsOptions[1].selected = false;
guestsOptions[2].selected = true;


const disabledOption = (targetSelector, changingOptions, imposterValue) => {

  changingOptions.forEach((option) => {
    option.disabled = false;
  });

  if (targetSelector.value === '1') {

    changingOptions.forEach((option) => {

      if (!(option.value === '1')) {
        option.disabled = true;
      }
    });

  } if (targetSelector.value === '2') {

    changingOptions.forEach((option) => {

      if (!(option.value === '1') && !(option.value === '2')) {
        option.disabled = true;
      }
    });
  } if (targetSelector.value === '3') {

    changingOptions.forEach((option) => {

      if (!(option.value === '1') && !(option.value === '2') && !(option.value === '3')) {
        option.disabled = true;
      }
    });
  } if (targetSelector.value === `${imposterValue}`) {

    changingOptions.forEach((option) => {
      option.disabled = true;
      changingOptions[3].disabled = false;
    });
  }

};


guestsSelector.addEventListener('input', () => {
  disabledOption(guestsSelector, roomOptions, 0);
});

roomSelector.addEventListener('input', () => {
  disabledOption(roomSelector, guestsOptions, 100);
});

