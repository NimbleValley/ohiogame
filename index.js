var tl = new TimelineMax();

const lightMusic = new Audio("music/91476_Glorious_morning.mp3");
const title = document.getElementById("title");
const buttons = document.getElementsByClassName("button-type-2");

const selectDestination = document.getElementById("menu-tab-select-game");
const slideshow = document.getElementById("slideshow");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = 0;
}

var curtains = document.getElementsByClassName("curtain");

for (var i = 0; i < curtains.length; i++) {
    curtains[i].style.top = i * 20 + "vh";
    curtains[i].style.left = "100vw";
}

title.style.opacity = 0;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function startMusic() {
    lightMusic.play();
    lightMusic.loop = true;
    document.getElementById("audio-popup").style.display = "none";
    animate();
}

async function animate() {
    tl.fromTo(title, 4, { x: "-100vw", opacity: 0 }, { x: 0, ease: Power2.easeOut, opacity: 1 });
    for (var i = 0; i < buttons.length; i++) {
        tl.fromTo(buttons[i], 0.75, { opacity: 0 }, { opacity: 1 });
    };
}

async function playGame() {
    for (var i = 0; i < curtains.length; i++) {
        curtains[i].style.left = "0";
        await sleep(150);
    }
    selectDestination.style.display = "flex";
    tl.fromTo(selectDestination, 0.75, { scale: 0.5 }, { scale: 1, ease: Power2.easeOut });
}

async function newGame() {
    tl.fromTo(selectDestination, 0.75, { scale: 1, opacity: 1 }, { scale: 0, ease: Power2.easeOut, opacity: 0 });
    await sleep(750);
    selectDestination.style.display = "none";
    slideshow.style.display = "block";
    tl.fromTo(slideshow, 0.75, { opacity: 0 }, { Pease: Power2.easeOut, opacity: 1 });
}