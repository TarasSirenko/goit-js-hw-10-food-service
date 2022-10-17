const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('[name="email"]'),
  messageInput: document.querySelector('[name="message"]'),
};

let feedbackForm = {};
const saveValueWhileTyping = event => {
  feedbackForm[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

const onReboot = () => {
  try {
    const currentValues = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    refs.emailInput.value = currentValues.email;
    refs.messageInput.value = currentValues.message;
    feedbackForm = currentValues;
  } catch {
    refs.emailInput.value = '';
    refs.messageInput.value = '';
  }
};
onReboot();

const onSubmit = event => {
  event.preventDefault();
  const sentValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(sentValue);
  localStorage.removeItem('feedback-form-state');

  onReboot();
};

refs.form.addEventListener('input', throttle(saveValueWhileTyping, 500));
refs.form.addEventListener('submit', onSubmit);
