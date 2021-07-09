//Ограничения, накладываемые на поля ввода

const typeSelect = document.querySelector('#type');
const typeOptions = typeSelect.querySelectorAll('option');

const priceInput = document.querySelector('#price');


typeSelect.addEventListener('input', () => {
  const type = typeOptions[typeSelect.selectedIndex].value;

  if (type === 'bungalow') {
    priceInput.min = 0;
    priceInput.placeholder = '0';
  } if (type === 'flat') {
    priceInput.min = 1000;
    priceInput.placeholder = '1000';
  } if (type === 'hotel') {
    priceInput.min = 3000;
    priceInput.placeholder = '3000';
  } if (type === 'house') {
    priceInput.min = 5000;
    priceInput.placeholder = '5000';
  } if (type === 'palace') {
    priceInput.min = 10000;
    priceInput.placeholder = '10000';
  }
});

