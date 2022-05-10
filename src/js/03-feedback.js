
import throttle from 'lodash.throttle';//

const formEl = document.querySelector(".feedback-form");//

formEl.addEventListener('input', throttle(handInputType, 500));
formEl.addEventListener('submit', handFormSubmit);

const STORAGE_KEY = "feedback-form-state";

const formData =  {} ;
// сохраняет локально ключ и значение ключа в обьект
function handInputType(e) {
    formData[e.target.name] = e.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        console.log(formData);
}
// выводит в консоль значение email and message
function handFormSubmit(evt) {
  evt.preventDefault();
  
  const {
    elements: { email, message }
  } = evt.currentTarget;
  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`email: ${email.value},Message: ${message.value}`);
    
  //  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();

