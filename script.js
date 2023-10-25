const startButton = document.querySelector('#start');
const pomodoroTime = document.querySelector('#pomodoro-time');

startButton.addEventListener('click', stopTime);

function stopTime() {
  if (startButton.textContent === 'stop') {
    startButton.textContent = 'start';
    clearInterval(timerId);
} else {
  startButton.textContent = 'stop';
  timerId = setInterval(() => {
    const time = pomodoroTime.textContent.split(':');
    let minutes = parseInt(time[0]);
    let seconds = parseInt(time[1]);

    seconds--;

    if(seconds === -1) {
      minutes--;
      seconds = 59; 
    }

    if (minutes === 0 && seconds === 0) {
      startButton.textContent = "start";
      clearInterval(timerId);
      pomodoroTime.textContent = `25:00`;
      return pomodoroTime;
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    pomodoroTime.textContent = `${minutes} : ${seconds}`;
  }, 1000);
}
}