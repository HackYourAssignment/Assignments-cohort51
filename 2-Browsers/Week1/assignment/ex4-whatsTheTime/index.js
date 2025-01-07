/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const timeDisplay = document.createElement('div');
  timeDisplay.style.fontSize = '4rem';
  timeDisplay.style.textAlign = 'center';
  document.body.appendChild(timeDisplay);

  function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

window.onload = addCurrentTime;
