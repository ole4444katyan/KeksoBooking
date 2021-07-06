//Переключение состояния формы

const stateToggleElement = (element, items) => {
  element.classList.toggle('ad-form--disabled');

  items.forEach((item) => {
    if(item.disabled === true) {
      item.disabled = false;
    } else {
      item.disabled = true;
    }
  });
};


export { stateToggleElement };
