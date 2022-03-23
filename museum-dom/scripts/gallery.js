const pictureInnerContainer = document.querySelector('.picture-inner-container');
const gallery = document.querySelector('#gallery');
let imgArr = ['galery1.jpg', 'galery2.jpg', 'galery3.jpg', 'galery4.jpg', 'galery5.jpg', 'galery6.jpg', 'galery7.jpg', 'galery8.jpg', 'galery9.jpg', 'galery10.jpg', 'galery11.jpg', 'galery12.jpg', 'galery13.jpg', 'galery14.jpg', 'galery15.jpg'];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

function createGallery() {
  shuffle(imgArr)
  const newImgArr = imgArr;
  newImgArr.map(elem => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('picture-item')
    img.src = `assets/img/galery/${elem}`;
    img.alt = `${elem}`;
    pictureInnerContainer.append(div);
    div.append(img)
  })
}
createGallery()

let galleryListItems = document.querySelectorAll('.picture-item');

function showGalleryItems() {
  galleryListItems.forEach(item => {
    const maxScrollY = window.scrollY + window.innerHeight;
    if (maxScrollY > item.getBoundingClientRect().top + window.pageYOffset - item.getBoundingClientRect().height / 2) {
      setTimeout(() => {
        item.classList.add('picture-item-show')
      }, 100);
    } else item.classList.remove('picture-item-show');
  });
}
window.addEventListener('scroll', showGalleryItems);