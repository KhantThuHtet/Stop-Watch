let display = document.querySelector(".display");
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let continueBtn = document.querySelector(".continue-btn");
let restartBtn = document.querySelector(".restart-btn");
let resetBtn = document.querySelector('.reset-btn');
let milisecond = document.querySelector(".milisecond");

let seconds = 0,
  minutes = 0,
  hours = 0;

let intervalId;
let miliId;
let startInterval = () => {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
  }
  
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  console.log(secondText);
  display.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let miliInterval = () => {
    milisec++;
    if (milisec == 100) {
      milisec = 0;
      console.warn("---------");
    }
    console.log(milisec);
    milisecond.innerHTML = milisec;
  };
startBtn.addEventListener('click', ()=>{  
    clearInterval(intervalId);
    startBtn.setAttribute("disabled", '');
    intervalId = setInterval(startInterval, 1000);
    console.log("Start Button");
});

let milisec = 0;
startBtn.addEventListener("click", () => {
  miliId = setInterval(miliInterval, 10);
  
});

pauseBtn.addEventListener('click', ()=>{
  continueBtn.removeAttribute('disabled');
  clearInterval(intervalId);
  clearInterval(miliId);
  console.log("Pause Button");
});

continueBtn.addEventListener('click', ()=>{
  continueBtn.setAttribute('disabled', '');
  intervalId = setInterval(startInterval, 1000);
  miliId = setInterval(miliInterval, 10);
  console.log('Continue Button');
});

restartBtn.addEventListener('click', ()=>{
  clearInterval(intervalId);
  clearInterval(miliId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  intervalId = setInterval(startInterval, 1000);
  miliId = setInterval(miliInterval, 10);
  console.log('Restart Button');
});

resetBtn.addEventListener('click', ()=>{
  clearInterval(intervalId);
  clearInterval(miliId);
  milisecond.innerHTML = '000';
  hours = 0;
  minutes = 0;
  seconds = 0;
  // const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  // const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  // const hourText = hours < 10 ? "0" + hours.toString() : hours;
  // console.log(secondText);
  display.textContent = '00:00:00';
});

