function start() {
    // Disable start button, enable pause and stop buttons
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('stop').disabled = false;
    
    isRunning = true;
    timer = setInterval(updateTime, 1000); // Update time every second
  }

  function pause() {
    if (isRunning) {
      clearInterval(timer); // Pause the timer
      document.getElementById('pause').textContent = 'Continue'; // Change button text to 'Continue'
      isRunning = false;
    } else {
      timer = setInterval(updateTime, 1000); // Continue the timer
      document.getElementById('pause').textContent = 'Pause'; // Change button text back to 'Pause'
      isRunning = true;
    }
  }

  function stop() {
    clearInterval(timer); // Stop the timer
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTime(); // Reset time display
    document.getElementById('start').disabled = false; // Enable start button
    document.getElementById('pause').disabled = true; // Disable pause button
    document.getElementById('pause').textContent = 'Pause'; // Reset pause button text
    document.getElementById('stop').disabled = true; // Disable stop button
    isRunning = false;
  }

  function updateTime() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    const timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('time').textContent = timeString;
  }

  function pad(val) {
    return val < 10 ? '0' + val : val; // Add leading zero if needed
  }