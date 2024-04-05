let now = new Date();
let finish = date = new Date(2024, 11, 31, 18, 0, 0, 0);
let delta = Math.trunc((finish - now) / 1000);


function convertSecondsToDHMS(totalSeconds) {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = Math.floor(totalSeconds % 60);
    return { days, hours, minutes, seconds: remainingSeconds };
}

const { days, hours, minutes, seconds } = convertSecondsToDHMS(delta);
let timerElems = document.querySelectorAll('.timerElem .num');
timerElems[0].innerHTML = twoDigitsNum(days);
timerElems[1].innerHTML = twoDigitsNum(hours);
timerElems[2].innerHTML = twoDigitsNum(minutes);

function twoDigitsNum(a) {
    if (a < 10) {
        return `0${a}`;
    } else {
        return a;
    }
}

let whiteBtn = document.getElementsByClassName("white")[0];
let PopUpWrapper = document.querySelector(".popForm");
let closeBtn = document.querySelector(".close");

whiteBtn.addEventListener("click", popForm);
closeBtn.addEventListener("click", closepopUp)
function popForm(){
    PopUpWrapper.style.display="flex";
}
function closepopUp(){
    PopUpWrapper.style.display="none";
}