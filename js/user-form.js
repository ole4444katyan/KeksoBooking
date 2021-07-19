
import { sendData } from './api.js';
import { reset } from './reset.js';

const ALERT_SHOW_TIME = 5000;

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');
const form = document.querySelector('.ad-form');


const getSuccessMessage = () => {
  const successElement = successMessage.cloneNode(true);
  body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
    }
  });
  body.addEventListener('click', () => {
    successElement.remove();
  });
  body.appendChild(successElement);
};

const getErrorMessage = () => {
  const errorElement = errorMessage.cloneNode(true);
  const errorButton = errorElement.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorElement.remove();
  });
  body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });
  body.addEventListener('click', () => {
    errorElement.remove();
  });
  body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, ALERT_SHOW_TIME);
};


const sendDataListener = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(reset, getSuccessMessage, getErrorMessage, formData);
  });
};

export { sendDataListener };
