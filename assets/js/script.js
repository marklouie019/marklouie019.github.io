// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// CURSOR HOVER EFFECT
const largeCursor = document.getElementById('cursor');

function applyCursorEffect() {
    largeCursor.style.mixBlendMode = 'difference';
    largeCursor.style.transform = 'scale(3)';
}

function revertCursorEffect() {
    largeCursor.style.mixBlendMode = 'normal';
    largeCursor.style.width = '20px';
    largeCursor.style.height = '20px';
    largeCursor.style.transform = 'translate(-50%, -50%)';
}

// MENU TOGGLER
var isMenuVisible = false;
var menuIcon = document.getElementById('menuIcon');
var menuDisplay = document.getElementById('menuDisplay');
var homeDisplay = document.getElementById('homeDisplay');

menuIcon.innerHTML = `<svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
        <path class="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
        <path class="line middle" d="m 30,50 h 40" />
        <path class="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>`;

function displayMenu() {

    if (!isMenuVisible) {
        menuDisplay.style.display = 'block';
        homeDisplay.style.display = 'none';
    } else {
        menuDisplay.style.display = 'none';
        homeDisplay.style.display = 'block';
    }
    isMenuVisible = !isMenuVisible;
}

if (!isMenuVisible) {
    menuDisplay.style.display = 'none';
}

function displayHomePage() {
    isMenuVisible = false;
    menuDisplay.style.display = 'none';
    homeDisplay.style.display = 'block';

    // RESET TOGGLER
    const menuToggler = document.querySelector('.ham');
    if (menuToggler.classList.contains('active')) {
        menuToggler.classList.remove('active');
    }
}