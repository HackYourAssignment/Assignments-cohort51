
  function addCurrentTime() {



    const timeEl = document.createElement('p');
    document.body.appendChild(timeEl);

    function updateTime(){

      const currentTime = new Date();
      
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();


      hours = hours < 10 ? '0' + hours : hours ;
      minutes = minutes < 10 ? '0 '+ minutes : minutes ;
      seconds = seconds < 10 ? '0' + seconds : seconds ;



      const timeFormat = `${hours}:${minutes}:${seconds}`;
      timeEl.textContent = timeFormat;

      }
      setInterval(updateTime,1000);

      updateTime();


  }
  window.addEventListener('load', addCurrentTime)


