const player = document.querySelector('.video-wrap');
const videoPlayer = player.querySelector('.video-img');
const progress = player.querySelector('.video-progress');
const controls = player.querySelector('#video-controls');
const toggle = player.querySelector('#stop');
const bigBtn = player.querySelector('#play');
const muteBtn = player.querySelector('#mute');
const fullBtn = player.querySelector('#full');
const speedVideo = player.querySelector('#speed-video');
const ranges = player.querySelectorAll('.progress');

function togglePlay(){
  const method = videoPlayer.paused ? 'play' : 'pause';
  videoPlayer[method]();
}
function toggleMute(){
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
     muteStyle()
  } else if(!videoPlayer.muted){
    videoPlayer.muted = true; 
    muteStyle()
  }
 
}
function muteStyle(){
  const iconMute = videoPlayer.muted ? 'url(assets/video/muteoff.svg) no-repeat' : 'url(assets/video/mute.svg) no-repeat';
  muteBtn.style.background = iconMute;
}

function updateButton(){
  const icon = videoPlayer.paused ? 'url(assets/video/right.svg) no-repeat' : 'url(assets/video/pause.svg) no-repeat';
  toggle.style.background = icon;
  
  const bigButtonDisplay = videoPlayer.paused ? 'block': 'none' ;
   bigBtn.style.display = bigButtonDisplay;
}

function skip() {
  videoPlayer.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
  videoPlayer[this.name] = this.value;
  if(videoPlayer['volume'] === 0){
    videoPlayer.muted = true; 
    muteStyle()
  } else{
    videoPlayer.muted = false; 
    muteStyle()
    }
}
 function handleProgress() {
  const percent = ((videoPlayer.currentTime / videoPlayer.duration) * 100) || 0;
  progress.value = `${percent}`;
  progress.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + percent + '%, #C4C4C4 ' + percent + '%, #C4C4C4 100%)'
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}
function keyDown(e) {
  let key = e.code;
  if (window.pageYOffset>3000 && window.pageYOffset<4500){
    if (key === 'Space') { // spacebar
    e.preventDefault();
    togglePlay();
  }
  if (key === 'KeyM') {
    e.preventDefault();
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      muteStyle()
    } else {
      videoPlayer.muted = true;
      muteStyle()
    }
    
  }
  if (key === 'Comma') {
    e.preventDefault();
    videoPlayer['playbackRate'] += (-0.25);
    videoPlayer[this.name] = this.value;
    speedVideo.innerHTML = `«${videoPlayer['playbackRate']}`
    setTimeout(()=>{
      speedVideo.innerHTML = '';
    },1000)
  }
  if (key === 'Period') {
    e.preventDefault();
    videoPlayer['playbackRate'] += (0.25);
    speedVideo.innerHTML = `${videoPlayer['playbackRate']}»`
    setTimeout(()=>{
      speedVideo.innerHTML = '';
    },1000)
  }
  if (key === 'KeyF') {
    e.preventDefault();
    openFullscreen();
  }
  }
  
}

function openFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
    controls.style.position = 'absolute';
    controls.style.bottom = '0';
    controls.style.left = '0';
    controls.style.width = '100%'
    controls.style.background = '#2a2a2a45'

  } else {
    document.exitFullscreen();
    controls.style.background = '#000000'
  }
}

videoPlayer.addEventListener('click', togglePlay);
bigBtn.addEventListener('click', togglePlay);
videoPlayer.addEventListener('play', updateButton);
videoPlayer.addEventListener('pause', updateButton);
videoPlayer.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
muteBtn.addEventListener('click', toggleMute);
fullBtn.addEventListener('click', openFullscreen)
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
window.addEventListener('keydown', keyDown);

