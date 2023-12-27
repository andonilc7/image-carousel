import './index.css'

import saka from './assets/bukayo-saka.jpeg'
import rice from './assets/declan-rice.jpeg'
import martinelli from './assets/gabriel-martinelli.jpeg'
import menuLeft from './assets/menu-left.svg'
import menuRight from './assets/menu-right.svg'
import p1 from './assets/christmas-photos/p - 1.jpeg'
import p2 from './assets/christmas-photos/p - 2.jpeg'
import p3 from './assets/christmas-photos/p - 3.jpeg'
import p4 from './assets/christmas-photos/p - 4.jpeg'
import p5 from './assets/christmas-photos/p - 5.jpeg'
import p6 from './assets/christmas-photos/p - 6.jpeg'
import p7 from './assets/christmas-photos/p - 7.jpeg'
import p8 from './assets/christmas-photos/p - 8.jpeg'
import p9 from './assets/christmas-photos/p - 9.jpeg'
import p10 from './assets/christmas-photos/p - 10.jpeg'
import p11 from './assets/christmas-photos/p - 11.jpeg'
import p12 from './assets/christmas-photos/p - 12.jpeg'
import p13 from './assets/christmas-photos/p - 13.jpeg'
import p14 from './assets/christmas-photos/p - 14.jpeg'
import p15 from './assets/christmas-photos/p - 15.jpeg'
import p16 from './assets/christmas-photos/p - 16.jpeg'
import p17 from './assets/christmas-photos/p - 17.jpeg'


const imageContainer = document.querySelector('.image-container')
const carouselContainer = document.querySelector('.carousel-container')
const body = document.querySelector('body')
const circleContainer = document.querySelector('.circle-container')

const imgArray = [p1,p2,p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17];

const previousBtn = document.createElement('img')
previousBtn.src = menuLeft;
previousBtn.classList.add('img-change-btn')
previousBtn.classList.add('previous-btn')
previousBtn.style.position = "absolute";
previousBtn.style.left = '10px'
//130px + margin (40px)
previousBtn.style.top = '170px'
previousBtn.style.width = "90px"
previousBtn.style.height = "90px;"
carouselContainer.prepend(previousBtn)

const nextBtn = document.createElement('img');
nextBtn.src = menuRight;
nextBtn.classList.add('img-change-btn')
nextBtn.classList.add('next-btn')
nextBtn.style.position = "absolute";
nextBtn.style.right = '10px'
//130px + margin (40px)
nextBtn.style.top = '170px'
nextBtn.style.width = "90px"
nextBtn.style.height = "90px;"
carouselContainer.append(nextBtn)


let index = 0;
let circleArray = [];
function createCarousel (arr) {
  index = 0;
  let circleIndex = 0
  arr.forEach((imgUrl) => {
    const img = document.createElement('img')
    img.src = imgUrl;
    img.style.width = "500px"
    imageContainer.append(img)
    const circle = document.createElement('div')
    circle.setAttribute('data-index', circleIndex)
    circle.classList.add('circle')
    circleContainer.append(circle)
    circleArray.push(circle)
    circleIndex++;
  })
  circleArray[0].classList.add('active')
}



function circleActivate(e, imageCont) {
  circleArray.forEach(circle => {
    circle.classList.remove('active')
  })
  e.target.classList.add('active')
  console.log(`translateX(-${e.target.getAttribute('data-index')*1000}px)`)
  index=e.target.getAttribute('data-index');
  imageCont.style.transform = `translateX(-${e.target.getAttribute('data-index')*1000}px)`
}

function nextImage(imageCont) {
  index++;
  if (index >= imageCont.children.length) {
    imageCont.style.transform = "translateX(0px)"
    index = 0;
  } else {
    imageCont.style.transform = `translateX(-${index*1000}px)`
  }
  console.log(circles)
  circles.forEach(circle => {
    circle.classList.remove('active')
    console.log(circle)
    if (index==circle.getAttribute('data-index')) {
      circle.classList.add('active')
    }
  })
}

function previousImage(imageCont) {
  index--;
  console.log(index)
  if (index <0) {
    imageCont.style.transform = `translateX(-${1000*(imageCont.children.length - 1)}px)`
    index = imageCont.children.length - 1;
  }
  else {
    imageCont.style.transform = `translateX(-${index*1000}px)`
  }
  circles.forEach(circle => {
    circle.classList.remove('active')
    console.log(circle)
    if (index==circle.getAttribute('data-index')) {
      circle.classList.add('active')
    }
  })
}

previousBtn.addEventListener('click', () => {
  previousImage(imageContainer);
})

nextBtn.addEventListener('click', () => {
  nextImage(imageContainer);
})

createCarousel(imgArray);
let circles = document.querySelectorAll('.circle')
circleArray.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    circleActivate(e, imageContainer)
  })
})

let i = 0;
function repeatTimeout() {
  if (i=0) {
    i++;
  } else {
    nextImage(imageContainer);
    i++;
  }
  setTimeout(() => {
    repeatTimeout()}, 2500);
}

repeatTimeout();




