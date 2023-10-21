const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onSubmitButtonClick);
formRef.addEventListener('input', throttle(onValueEnteredField, 500));

let dataObj = {};

function onValueEnteredField({ target }) {
  if (target.nodeName === 'INPUT') {
    dataObj[target.name] = target.value;
  }
  if (target.nodeName === 'TEXTAREA') {
    dataObj[target.name] = target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}

function checkLocalStorage() {
  if (!localStorage.length) {
    return;
  }

  const parseData =
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';
  const keyParseData = Object.keys(parseData);

  keyParseData.forEach(key => (formRef.elements[key].value = parseData[key]));

  dataObj = {...parseData}

  //   if (!parseData?.email) {
  //      formRef.elements.email.value = ''
  //      // return formRef.elements.email.value = ''
  //   }else{
  //      formRef.elements.email.value = parseData.email
  //   }

  //   if (!parseData?.message) {
  //      formRef.elements.message.value = ''
  //      // return formRef.elements.email.value = ''
  //   }else{
  //      formRef.elements.message.value = parseData.message
  //   }
}
checkLocalStorage();

function onSubmitButtonClick(evt) {
  evt.preventDefault();

  dataObj = new Object();
  console.log(dataObj);
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
}
