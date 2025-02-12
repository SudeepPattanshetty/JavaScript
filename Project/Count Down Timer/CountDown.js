const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let countdownInterval;
let targetDate;

function startCountDown(){
  clearInterval(countdownInterval);

  const targetDateInput = document.getElementById('target-date');
  targetDate = new Date(targetDateInput.value).getTime();
  
  if(isNaN(targetDate)){
    alert('Please enter a valid date and time.');
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance < 0){
      clearInterval(countdownInterval);
      alert('CountDown Finished');
      resetCountDown();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    dayEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}


function resetCountDown(){
  clearInterval(countdownInterval);
  dayEl.textContent = "00";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  document.getElementById("target-date").value = ''
}

startBtn.addEventListener("click", startCountDown); 
resetBtn.addEventListener("click", resetCountDown); 