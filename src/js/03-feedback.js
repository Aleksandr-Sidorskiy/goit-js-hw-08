
import throttle from 'lodash.throttle';//

const formEl = document.querySelector(".feedback-form");//
formEl.addEventListener('input', throttle(handInputType, 500));
formEl.addEventListener('submit', handFormSubmit);
console.log()
const STORAGE_KEY = "feedback-form-state";
initForm()

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
  } = evt.target;
  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`email: ${email.value},Message: ${message.value}`);
  
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();
function initForm() {
  let persistedFilters = localStorage.getItem(STORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([email, message]) => {
      formEl.elements[email].value = message;
    });
  }
}
