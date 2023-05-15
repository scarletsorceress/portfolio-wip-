document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', function() {
  goToSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', function() {
  goToSlide(currentSlide - 1);
});


const toggle = document.querySelector('#toggle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

toggle.addEventListener('change', function() {
  
  if (toggle.checked) {
    body.classList.add('dark');
    header.classList.add('dark');
    footer.classList.add('dark');
  } else {
    body.classList.remove('dark');
    header.classList.remove('dark');
    footer.classList.remove('dark');
  }

}, false);

