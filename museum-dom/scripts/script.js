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
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
          topBtn.classList.add('show');
          // Иначе прячем
      } else {
        topBtn.classList.remove('show');
      }
  });

  // При клике прокручиваем на самый верх
  topBtn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
  }
});
console.log(`
Самооценка 144 из 160.
Невыполненные пункты вынесла ниже в консоль, остальное готово.
Дополнительный функционал: кнопка прокрутки страницы вверх, появляется после секции Welcome + плавная смена изображений в блоке Tickets;
Оценка - 144 балла


Не выполненные/не засчитанные пункты:
1) есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки
2) слайды перелистываются плавно с анимацией смещения вправо или влево
3) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно
4) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео
5) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео
6) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется)
******Итого: 144 из 160******
`)