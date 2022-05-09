import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
const textareaEl = document.querySelector(".feedback-form textarea");
const emailEl = document.querySelector(".feedback-form input");

formEl.addEventListener('submit', handFormSabmit);
textareaEl.addEventListener('input', throttle(handTextAreaInput, 500));
emailEl.addEventListener('input', throttle(handTextAreaInput, 500))

populateTextarea();

function handFormSabmit(evt) {
    evt.preventDefault();

    const {
        elements: { email, message }
    } = evt.currentTarget;

    if (email.value === "" || message.value === "") {
        return console.log("Please fill in all the fields!");
    }

    console.log(`email: ${email.value},textarea: ${message.value}`);

    localStorage.removeItem(STORAGE_KEY);

    evt.currentTarget.reset();
}
 

function handTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
  
}


function populateTextarea() {
    // const savedMessage = localStorage.getItem(JSON.stringify(formData));
  const savedMessage = localStorage.getItem(STORAGE_KEY);
      console.log(savedMessage);
  if (savedMessage) {
      textareaEl.value = savedMessage;
      
  }
    
}

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  console.log(formData);
});
