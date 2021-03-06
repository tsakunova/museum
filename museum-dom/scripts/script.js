const btnPrev = document.getElementById('btn-prev-slide'),
  btnNext = document.getElementById('btn-next-slide'),
  slides = document.querySelectorAll('.slide'),
  squares = document.querySelectorAll('.square'),
  cocoen = document.querySelectorAll('.cocoen'),
  progressArr = document.querySelectorAll('.progress'),
  video = document.querySelector('.video-slider'),
  main = document.querySelector('main'),
  contactsText = document.querySelector('contacts-text');

let indexSlide = 0,
  currentNumberText = document.querySelector('.current-number-slide');

const currentText = indexSlide => {
  currentNumberText.textContent = `0${indexSlide+1}`
}

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active-slide');

  }
  slides[n].classList.add('active-slide')
};

const activeSquare = n => {
  for (square of squares) {
    square.classList.remove('active-square');
  }
  squares[n].classList.add('active-square')
};
const prepareCurrent = ind => {
  activeSlide(ind);
  activeSquare(ind);
  currentText(ind)
}

const prevSlide = () => {
  if (indexSlide == 0) {
    indexSlide = slides.length - 1;
    prepareCurrent(indexSlide);
  } else {
    indexSlide--;
    prepareCurrent(indexSlide);
  }
}
const nextSlide = () => {
  if (indexSlide == slides.length - 1) {
    indexSlide = 0;
    prepareCurrent(indexSlide);
  } else {
    indexSlide++;
    prepareCurrent(indexSlide);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new Cocoen();
});
//Cocoen.parse(document.body);

squares.forEach((item, indexSquare) => {
  item.addEventListener('click', () => {
    indexSlide = indexSquare;
    prepareCurrent(indexSlide);
  })
})
progressArr.forEach((item, indexProgress) => {
  item.oninput = function () {
    let value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #C4C4C4 ' + value + '%, #C4C4C4 100%)'
  }
});
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

function scrollTo(to, duration = 700) {
  const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
          }
          else {
              element.scrollTop = to;
          }
      };
  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  let topBtn = document.querySelector('.home-circle');
  window.addEventListener('scroll', function () {
      // ???????? ???????????????????? ???????????? 599px, ???????????????????? ????????????
      if (pageYOffset > 100) {
          topBtn.classList.add('show');
          // ?????????? ????????????
      } else {
        topBtn.classList.remove('show');
      }
  });

  // ?????? ?????????? ???????????????????????? ???? ?????????? ????????
  topBtn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
  }
});
console.log(`
???????????????????? 144 ???? 160.
?????????????????????????? ???????????? ?????????????? ???????? ?? ??????????????, ?????????????????? ????????????.
???????????????????????????? ????????????????????: ???????????? ?????????????????? ???????????????? ??????????, ???????????????????? ?????????? ???????????? Welcome + ?????????????? ?????????? ?????????????????????? ?? ?????????? Tickets;
???????????? - 144 ??????????


???? ??????????????????????/???? ?????????????????????? ????????????:
1) ???????? ?????????????????????? ???????????????????????????? ?????????????? ?????????? ?? ???????????? ???????????????? (????????????????????) ??????????
2) ???????????? ?????????????????????????????? ???????????? ?? ?????????????????? ???????????????? ???????????? ?????? ??????????
3) ???????? ?????????? ?? YouTube ??????????????????????????, ???????? ???? ???????????? Pause ?????????????????????????? ?????? ????????????????????????. ?????????? ???????????????????????? ?????????? ??????????????????????????????, ???????? ???????????????? ???? ?????????????? ???????????? ?????? ???????????? Play ?? ???????????? ?????????????? ????????????. ?? ?????????????????? ???????????????? ???????????? ?????????? ???????????? ??????????????????????, ?? ?????????????? ????????????????????????. ???????????????????? ???????????????????????? ???????????????????? YouTube ?????????? ????????????????????????
4) ???????? ???????????? ???????????? ?????????????????????????? ?????????? ?? YouTube, ???????? ???? ?????????????? ???????????????????????????? ?????????????? ?????? ???????? ???? ?????????????? ?????????????????????????? ???????????????????????? ??????????
5) ???????? ?????????????????????? ???????????????????????????? ?????????????? ?????????????? ???? ???????????????? (???????????????? ?????????? ????????????????), ?????? ???????? ?????????? ???????????????? ???????????????? ??????????
6) ???????????? ?????????????????????????????? ???????????? ?? ?????????????????? ???????????????? ???????????? ?????? ?????????? (?????? ?????????? ?????????????????? ?????????? ???????????????? ???????????????? ???? ?????????????????? ?? ???? ??????????????????????)
******??????????: 144 ???? 160******
`)