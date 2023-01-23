var slides = document.getElementsByClassName("slide");
var onSlide = 0;

for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[0].style.display = "flex";

function nextSlide() {
    onSlide++;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[onSlide].style.display = "flex";
}

function previousSlide() {
    if (onSlide > 0) {
        onSlide--;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[onSlide].style.display = "flex";
}