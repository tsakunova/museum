const btnPrevVideo = document.getElementById('prev-video'),
  btnNextVideo = document.getElementById('next-video'),
  slidesVideo = document.querySelectorAll('.video-slider-item'),
  videoSrc = document.querySelector('video'),
  sliderContainer = document.querySelector('.video-slider'),
  rounds = document.querySelectorAll('.round'),
  iframe =  document.querySelectorAll('iframe'),
  videoItem = document.querySelectorAll('.video-slider-item');
  let allVideo = ['video0.mp4', 'video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];
  let allPoster = ['poster0.jpg', 'poster1.jpg', 'poster2.jpg', 'poster3.jpg', 'poster4.jpg'];


let indexSlideV = 0;

function nextVideo() {
  while (indexSlideV < 5) {
    indexSlideV++;
      if (indexSlideV === 5) {
        indexSlideV = 0;
      }
      activeRoundAndSlideandVideo(indexSlideV)
      videoSrc.src = 'assets/video/' + allVideo[indexSlideV];
      videoSrc.poster = 'assets/video/' + allPoster[indexSlideV];
      progress.value = 0;
      break;
  }      
}
function  prevVideo() {
  while (indexSlideV >= 0) {
    indexSlideV--;
      if (indexSlideV === -1) {
        indexSlideV = 4;
      }
      activeRoundAndSlideandVideo(indexSlideV)
      videoSrc.src = 'assets/video/' + allVideo[indexSlideV];
      videoSrc.poster = 'assets/video/' + allPoster[indexSlideV]; 
      progress.value = 0;   
      break;
  }      
}
function activeRoundAndSlideandVideo(indexSlideV){
  activeRound(indexSlideV);
  activeSlideVideo(indexSlideV);
}



function clickRoundSlide() {
  for (let i = 0; i < videoItem.length; i++) {
    videoSrc.src = 'assets/video/' + allVideo[indexSlideV];
    videoSrc.poster = 'assets/video/' + allPoster[indexSlideV];
    activeRoundAndSlideandVideo(indexSlideV)
  }
  
}
 

function activeSlideVideo(indexSlideV) {
  for (slide of slidesVideo) {
      slide.classList.remove('activeV');
  }
  slidesVideo[indexSlideV].classList.add('activeV');
}

function activeRound (indexSlideV) {
  for (round of rounds) {
    round.classList.remove('active-round');
  }
  rounds[indexSlideV].classList.add('active-round')
};

function nextSlideVideo() {
  sliderContainer.appendChild(document.querySelectorAll('.video-slider-item')[0])
}

function prevSlideVideo() {
  const items = document.querySelectorAll('.video-slider-item')
  sliderContainer.prepend(items[items.length - 1])
}

function progressStart(){
  progress.value = 0;
  progress.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) 0%, rgb(196, 196, 196) 0%, rgb(196, 196, 196) 100%)`;
}
btnNextVideo.addEventListener('click', ()=>{
  nextVideo();
  updateButton();
  progressStart();
  
});
btnNextVideo.addEventListener('click', nextSlideVideo);
btnPrevVideo.addEventListener('click', prevSlideVideo);
btnPrevVideo.addEventListener('click',()=>{
  prevVideo();
  updateButton();
  progressStart();
 
});
rounds.forEach((item, indexRound) => {
  item.addEventListener('click', () => {
    indexSlideV = indexRound;
    clickRoundSlide();
  })
})
