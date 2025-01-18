// const { isMinusToken } = require('typescript');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const timeStyle = `${hours}:${minutes}:${seconds}`;

  const timeDive = document.getElementById('time');

  if (!timeDive) {
    const div = document.createElement('div');
    div.id = 'time';
    div.textContent = timeStyle;
    document.body.appendChild(div);
  } else {
    timeDive.textContent = timeStyle;
  }
}
window.addEventListener('load', () => {
  addCurrentTime();
  setInterval(addCurrentTime, 1000);
});
