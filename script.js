
function slidesPlagin(slideIndex) {
  const slides = document.querySelectorAll('.slide');
  slides[slideIndex].classList.add('active');
  slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActive();
  slide.classList.add('active');
  });
})

function clearActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
}

slidesPlagin(4);

