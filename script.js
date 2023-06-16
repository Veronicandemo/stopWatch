const timeDisplay = document.getElementById('timeDispay')
const startBtn = document.getElementById('startbtn')
const pauseBtn = document.getElementById('pausebtn')
const resetBtn = document.getElementById('resetbtn')
// Variables to keep track of different aspects of the timer
let startTime = 0 //time when the timer starts
let elapsedTime = 0 //keeps track of the time that has passed since the timer started
let currentTime = 0
let paused = true //when time is paused false if running
let intervalId
let hrs = 0
let mins = 0
let secs = 0

startBtn.addEventListener('click', () => {
  if (paused) {
    paused = false
    startTime = Date.now() - elapsedTime //gives current date and time in milliseconds
    // start timer
    intervalId = setInterval(updateTime, 1000)
  }
})

pauseBtn.addEventListener('click', () => {
  if (!paused) {
    paused = true
    elapsedTime = Date.now() - startTime
    clearInterval(intervalId)
    console.log('paused')
  }
})

resetBtn.addEventListener('click', () => {
  paused = true
  startTime = 0
  elapsedTime = 0
  currentTime = 0
  hrs = 0
  mins = 0
  secs = 0
  timeDisplay.textContent = '00:00:00'
})

function updateTime() {
  elapsedTime = Date.now() - startTime
  secs = Math.floor((elapsedTime / 1000) % 60)
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60 * 24)) % 60)
  const addPad = (unit) => (('0' + unit).length > 2 ? unit : '0' + unit)

  secs = addPad(secs)
  mins = addPad(mins)
  hrs = addPad(hrs)
  timeDisplay.textContent = `${hrs}:${mins}:${secs}`
}
