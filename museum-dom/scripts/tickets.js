let burgerButton = document.querySelector('.burger-button');
let ticketWindow = document.querySelector('.ticket-window');
let buyNow = document.querySelector('.buy-now');
let overlay = document.getElementById('overlay');
let tickImg = document.querySelector('.tick-img')
const button = document.getElementById('book-ticket');

buyNow.addEventListener('click',function(){
  ticketWindow.style.right = '-100%';
  overlay.classList.toggle('overlay');
});
burgerButton.addEventListener('click',function(){
  ticketWindow.style.right = '100%';
  overlay.classList.toggle('overlay');
});
overlay.addEventListener('click', function(){
  ticketWindow.style.right = '100%';
  overlay.classList.toggle('overlay');
})

  let imgTicketArr = ['galery1.jpg', 'galery2.jpg', 'galery3.jpg', 'galery4.jpg', 'galery5.jpg', 'galery6.jpg', 'galery7.jpg', 'galery8.jpg', 'galery9.jpg', 'galery10.jpg', 'galery11.jpg', 'galery12.jpg', 'galery13.jpg', 'galery14.jpg', 'galery15.jpg'];

  const delay = 6000;
let indexTickPhoto = 0;
  setInterval(function() {
      tickImg.src =  `assets/img/galery/${imgTicketArr[indexTickPhoto]}`;
      indexTickPhoto++;
      if( indexTickPhoto >= imgTicketArr.length) {
        indexTickPhoto=0;
      }
  }, delay);


    button.addEventListener('click', function (e) {
      e.preventDefault()
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => {
          circle.remove()
        ticketWindow.style.right = '100%';
        overlay.classList.toggle('overlay');
        } , 500);
        
    })


  
