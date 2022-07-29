let toggleButton = document.getElementsByClassName("toggle-btn")[0]  
let navBar = document.getElementsByClassName("div-for-links-and-search-btn")[0]

toggleButton.addEventListener('click', () => {
navBar.classList.toggle('active')
})