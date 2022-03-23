let burgerMenuButton = document.querySelector('.menu-burger-button');
let burgerMenu = document.querySelector('.header-burger-menu');
let welcomeText = document.querySelector('.welcome-text');
let lines = document.querySelector('.menu-burger-button-lines');
let burgerListItems = document.querySelectorAll('.burger-item');
burgerMenuButton.addEventListener('click',function(){
  lines.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  welcomeText.classList.toggle('active')  
});
burgerListItems.forEach((item) => {
  item.addEventListener('click', () => {
    lines.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    welcomeText.classList.toggle('active')  
  })
})

