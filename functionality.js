let now = new Date()
let finish = date = new Date(2024, 2, 31, 18, 0, 0, 0)
let delta = Math.trunc((finish - now) / 1000)

function convertSecondsToDHMS(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return { days, hours, minutes, seconds: remainingSeconds };
}

const { days, hours, minutes, seconds } = convertSecondsToDHMS(delta);
let timerElems = document.querySelectorAll('.timerElem .num')
timerElems[0].innerHTML = twoDigitsNum(days)
timerElems[1].innerHTML = twoDigitsNum(hours)
timerElems[2].innerHTML = twoDigitsNum(minutes)

function twoDigitsNum(a) {
    if (a < 10) {
        return `0${a}`
    } else {
        return a
    }
}