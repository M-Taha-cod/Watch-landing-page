setTimeout(() => {
    const textElement = document.querySelector('.text');
    textElement.classList.add('move-left');
}, 4200); //4200

setTimeout(() => {
    const watchImage = document.querySelector('.watch-img');
    watchImage.classList.add('rotate-90');
}, 4200); //4200

setTimeout(() => {
    const watchImage = document.querySelector('.watch-img');
    watchImage.classList.add('show-image');
}, 3000); //3000 

setTimeout(() => {
    const watchImage = document.querySelector('.text');
    watchImage.classList.add('show-text');
}, 3000); //3000 

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    video.play().catch(error => {
        console.log('Autoplay was blocked:', error);
    });
});

ScrollReveal({
    reset: true,
    distance : "100px",
    duration: 2500,
    delay: 400
  });
  
  ScrollReveal().reveal('.left-text, .user-info', { delay: 3500, origin: "left" , interval: 1000, reset: false });
  ScrollReveal().reveal('.video-div', { delay: 4500, origin: "left" , interval: 1000 , reset: false});
  ScrollReveal().reveal('.right', { delay: 4500, origin: "right", interval: 1000 , reset: false});
  ScrollReveal().reveal('.rock-bottom', { delay: 200, origin: "bottom", interval: 1000 , reset: false});
  ScrollReveal().reveal('.hand-bottom', { delay: 1000, origin: "bottom", interval: 1000 , reset: false});
  ScrollReveal().reveal('.bottom-text', { delay: 1500, origin: "bottom", interval: 1000, reset: false });
  ScrollReveal().reveal('.rock-top', { delay: 200, origin: "top", interval: 1000, reset: false});
  ScrollReveal().reveal('.header', { delay: 500, origin: "top", interval: 1000, reset: false});
  ScrollReveal().reveal('.price-tag-btm', { delay: 500, origin: "top", interval: 1000, reset: false});
  ScrollReveal().reveal('.order-btn', { delay: 500, origin: "top", interval: 1000, reset: false});
  ScrollReveal().reveal('.text-ind', { delay: 500, origin: "bottom", interval: 1000, reset: false });
  ScrollReveal().reveal('.text-des', { delay: 500, origin: "bottom", interval: 1000, reset: false });
  ScrollReveal().reveal('.side-img', { delay: 500, origin: "bottom", interval: 1000, reset: false });

  

const image = document.querySelector('.btm-bkgImg');

image.style.filter = 'brightness(0.2)';