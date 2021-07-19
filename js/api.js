

const URL_FOR_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const URL_FOR_POST = 'https://23.javascript.pages.academy/keksobooking';


const sendData = (onSuccessReset, successMessage, errorMessage, body) => {

  fetch(
    URL_FOR_POST,
    {
      method: 'POST',
      body: body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccessReset();
      successMessage();
    } else {
      errorMessage();
    }
  })
    .catch(() => {
      errorMessage();
    });

};


const getData = (onSuccess) => {
  fetch(URL_FOR_GET)
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    });
};

export {
  sendData,
  getData
};
