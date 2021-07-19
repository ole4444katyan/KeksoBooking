
import { sendData } from './api.js';
import { reset } from './reset.js';

const ALERT_SHOW_TIME = 5000;

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.body;
const form = document.querySelector('.ad-form');


const showSuccessMessage = () => {
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

const showErrorMessage = () => {
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


const onSendSuccess = () => {
  reset();
  showSuccessMessage();
};

const onSendError = () => {
  showErrorMessage();
};

const sendDataListener = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(onSendSuccess, onSendError, formData);
  });
};

export { sendDataListener };
