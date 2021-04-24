const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playBtn = player.querySelector('.player__button');
const videoSrc = video.getAttribute('src');
const volumeRange = player.querySelector('input[name="volume"]');
const speed = player.querySelector('input[name="playbackRate"]');
const skipBtns = player.querySelectorAll('[data-skip]');
const progressBar = player.querySelectorAll('.progress__filled');
const rangeInputs = player.querySelectorAll('input[type="range"]');

function togglePlay(e){  
  if (video.paused){    
    video.play();    
    playBtn.innerHTML = ('||');    
  } else {    
    playBtn.innerHTML = ('►');
    video.pause();    
  }
}

function changeRange(){
  const name = this.name;
  const value = this.value;
  video[name] = value;  
}

function changeTime(){
  let skip = parseInt(this.dataset.skip);
  let currentTime = video.currentTime;  
  let newTime = (currentTime + skip);
  video.currentTime = newTime;
}

function setProgress(){  
  const totalTime = video.duration;
  let currentTime = video.currentTime;
  let timeLeft = (((totalTime - currentTime) / totalTime) * 100);  
  let progress = (100 - timeLeft);  
  progressBar[0].style.width = `${progress}%`;  
}

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

rangeInputs.forEach(range => {
  range.addEventListener('click', changeRange);  
})

skipBtns.forEach(btn => {
  btn.addEventListener('click', changeTime);
});

video.addEventListener('timeupdate', setProgress);