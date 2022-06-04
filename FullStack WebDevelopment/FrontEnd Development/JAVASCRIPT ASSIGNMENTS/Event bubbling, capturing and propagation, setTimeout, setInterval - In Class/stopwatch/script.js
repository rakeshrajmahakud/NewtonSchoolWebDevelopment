let startbtn = document.getElementById("btnStart");
let pausebtn = document.getElementById("btnPause");
let stopbtn = document.getElementById("btnStop");

let seconds = 0;
let minutes = 0;
let hours = 0;
let sec,min,hr;
let interval ;
function StopWatch() {
    seconds++;
    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if (seconds<10) {
        sec = "0"+seconds;
    }else{
        sec = seconds;
    }
    if (minutes<10) {
        min = "0"+minutes;
    }else{
        min = minutes;
    }
    if (hours<10) {
        hr = "0"+hours;
    }else{
        hr = hours;
    }

    document.getElementById('display').innerText = `${hr}:${min}:${sec}`
}
startbtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(StopWatch,1000);
    pausebtn.removeAttribute("disabled");
    stopbtn.removeAttribute("disabled");
    startbtn.setAttribute("disabled","");
})

pausebtn.addEventListener("click" ,()=>{
    if (pausebtn.innerText == "pause") {
        clearInterval(interval);
        pausebtn.innerText = "continue";
    }else{
        clearInterval(interval);
        interval = setInterval(StopWatch,1000);
        pausebtn.innerText = "pause";
    }
})

stopbtn.addEventListener('click',()=>{
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    sec = "00";
    min = "00";
    hr = "00";
    document.getElementById('display').innerText = `${hr}:${min}:${sec}`
    pausebtn.setAttribute('disabled',"");
    stopbtn.setAttribute('disabled',"");
    startbtn.removeAttribute('disabled',"");
})

    // document.getElementById('display').innerText = `${hr}:${min}:${sec}`
