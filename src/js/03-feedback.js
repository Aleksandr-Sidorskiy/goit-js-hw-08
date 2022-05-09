import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';//


// const textareaEl = document.querySelector(".feedback-form textarea");
// const emailEl = document.querySelector(".feedback-form input");

// formEl.addEventListener('submit', handFormSabmit);
// textareaEl.addEventListener('input', throttle(handTextAreaInput, 500));
// emailEl.addEventListener('input', throttle(handTextAreaInput, 500));
const formEl = document.querySelector(".feedback-form");//

formEl.addEventListener('input', throttle(handInputType, 500));
formEl.addEventListener('submit', handFormSubmit);

const STORAGE_KEY = "feedback-form-state";

// let formData =  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} ;//

function handInputType(evt) {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    formData[inputName] = inputValue;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
    console.log(formData)
}
    
    // formEl.addEventListener('input', e => {
    //     // console.log(e.target.name);
    //     // console.log(e.target.value);
    //     // JSON.stringify(formData[e.target.name] = e.target.value);
    //     formData[e.target.name] = e.target.value;
    //     console.log(formData);
    // });


populateForm();
function populateForm() {
    // const savedMessage = localStorage.getItem(JSON.stringify(formData));
    const savedForm = localStorage.getItem(STORAGE_KEY);
    const parsedForm = JSON.parse(savedForm);
      console.log(savedForm);
  if (parsedForm) {
     formEl.elements.message.value = parsedForm.message || '';
    formEl.elements.email.value = parsedForm.email || '';
  }
}

function handFormSubmit(evt) {
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

// function handTextAreaInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

// let formData =  JSON.parse(savedMessage)||{};
// let formData = {};

// const savedMessage = localStorage.getItem(STORAGE_KEY);
// console.log(savedMessage);



