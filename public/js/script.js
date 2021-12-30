// Capture the current theme from local storage and adjust the page to use the current theme.
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// When the user changes the theme, we need to save the new value on local storage
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}

var carouselElement = document.getElementById("carouselAnimals");
  var carousel = new bootstrap.Carousel(carouselElement, {
  	interval: 2000
  });

document.getElementById("btnPause").addEventListener("click", function () {
  
  carousel.pause();
  
});


