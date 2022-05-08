import Vimeo from "@vimeo/player";

// ______________________________________________
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe, options);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
// ______________________________________________
const options = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
}
iframe.addEventListener()
function handTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
  
}


const VIMEO_KEY = "videoplayer-current-time";
populateTextarea();
function populateTextarea() {
    // const savedMessage = localStorage.getItem(JSON.stringify(formData));
  const savedTime = localStorage.getItem(STORAGE_KEY);
      console.log(savedMessage);
  if (savedMessage) {
      textareaEl.value = savedMessage;
      
  }
    
}