/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // Creating the div element to hold the time and append it to the body
  const timeElement = document.createElement('div');
  document.body.appendChild(timeElement);

  // Creating the update time function with HH:MM:SS notation
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    timeElement.textContent = currentTime; // Setting the time to current time
  }

  updateTime();

  setInterval(updateTime, 1000); // To make sure time stays current
}

window.onload = addCurrentTime;
