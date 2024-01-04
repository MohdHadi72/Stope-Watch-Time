let main = document.querySelector('#main');
let mouse = document.querySelector('.curcer');

main.addEventListener("mousemove",function(deta){
    mouse.style.left = deta.x +"px"
    mouse.style.top = deta.y +"px"
});



const minutesLabel = document.getElementById("minutes");
const secondLabel = document.getElementById("seconds");
const milliseLabel = document.getElementById("milliesSecond");



 const startButton = document.getElementById("startBtn");
 const stopeButton = document.getElementById("stopeBtn");
 const pusedButton = document.getElementById("pusedBtn");
 const resetButton = document.getElementById("resetBtn");

const listLabel = document.getElementById("lastlist")

let minutes = 0;
let seconds = 0;
let milliesSecond = 0;
let interval;

startButton.addEventListener("click",startTimer);
stopeButton.addEventListener("click",stopeTimer);
pusedButton.addEventListener("click",pusedTimer);
resetButton.addEventListener("click",resetTimer);


function startTimer(){
    interval = setInterval(updateTimerCall,10);
    startButton.disabled = true;
    // startButton.disabled = false;
 }

 
 function stopeTimer(){
    clearInterval(interval);
    resetTimerData();
    addToLaplist();
    startButton.disabled = false;

 }


 function pusedTimer(){
    clearInterval(interval);
    startButton.disabled = false;

 }

 
 function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;

 }


function updateTimerCall(){
    milliesSecond ++;
    if(milliesSecond === 100){
        milliesSecond = 0;
        seconds ++;
        if(seconds === 60){
            seconds = 0;
            minutes ++;
        }
    }

    callTimer();
}


function callTimer() {
    milliseLabel.textContent = padTime(milliesSecond);
    secondLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2,'0');

}

function resetTimerData(){
     minutes = 0;
    seconds = 0;
    milliesSecond = 0;
    callTimer();
}

function resetTimerData() {
    const  lapTimer = `${padTime(minutes)}: ${padTime(seconds)}`
    const listItmes = document.createElement('li');


    listItmes.innerHTML = `<span>Lap  ${listLabel.childElementCount + 1}: </spam> ${lapTimer}`; 
    lapTimer.appendChild(listItmes);

}