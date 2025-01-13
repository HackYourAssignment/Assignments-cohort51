/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const elem = document.createElement('h1');
  elem.textContent = 'current time';
  document.body.append(elem);

  const paragraph = document.createElement('p');
  document.body.append(paragraph);

  function getCurrentTime() {
    const time = new Date();
    const hours = (time.getHours() + '').padStart(2, '0');
    const min = (time.getMinutes() + '').padStart(2, '0');
    const sec = (time.getSeconds() + '').padStart(2, '0');
    paragraph.textContent = `hours: ${hours}  minutes: ${min} second : ${sec}`;
  }

  const idSetInterval = setInterval(getCurrentTime, 1000);

  setTimeout(() => {
    clearInterval(idSetInterval);
  }, 10000);
}

window.addEventListener('load', addCurrentTime);
