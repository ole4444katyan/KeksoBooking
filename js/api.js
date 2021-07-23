
const API_URL = 'https://23.javascript.pages.academy/keksobooking';


const sendData = (onSuccess, onFail, body) => {

  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });

};


const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => {
      onFail();
    });
};

export {
  sendData,
  getData
};
