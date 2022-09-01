let toggleButton = document.getElementsByClassName("toggle-btn")[0]  
let navBar = document.getElementsByClassName("div-for-links-and-search-btn")[0]

toggleButton.addEventListener('click', () => {
navBar.classList.toggle('active')
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
