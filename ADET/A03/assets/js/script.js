// NAVBAR
const customNavbar = document.getElementById("customNavbar");
const offNav = document.getElementById("offNav");

const scrollThreshold = 50;

customNavbar.innerHTML += `
    <div class="branding ps-3">
        <a href="./"><img src="assets/img/ad-astra-logo.svg" alt="ad-astra-logo" id="navLogo"></a>
    </div>
    <div class="buttons">
        <a href="./">HOME</a>
        <a href="pricing.html">PRICING</a>
        <a href="destinations.html">DESTINATIONS</a>
    </div>
    <div class="theme pe-3" id="btnTheme">
        <img src="assets/img/light-theme.png" alt="toggle theme" id="themeIcon">
    </div>
    <div class="menu pe-3" id="menu">
        <svg class="ham hamRotate ham4" viewBox="0 0 100 100" width="80"
            onclick="this.classList.toggle('active')">
            <path class="line top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path class="line middle" d="m 70,50 h -40" />
            <path class="line bottom"
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    </div>
    
`;

offNav.innerHTML += ` <div class="buttons d-flex align-items-start flex-column">
            <a href="./">Home</a>
            <a href="pricing.html">Pricing</a>
            <a href="destinations.html">Destinations</a>
            <div class="theme2 pe-3 d-flex" id="btnTheme2">
                <img src="assets/img/light-theme.png" alt="toggle theme" id="themeIcon2">
            </div>
        </div>`;

const navLogo = document.getElementById('navLogo');
const themeIcon = document.getElementById("themeIcon");
const themeIcon2 = document.getElementById("themeIcon2");
const heroBg = document.getElementById('heroBg');
const btnTheme = document.getElementById('btnTheme');
const btnTheme2 = document.getElementById('btnTheme2');
const boxes = document.querySelectorAll('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7');
const box1a = document.getElementById('box1a');
const box3a = document.getElementById('box3a');
const box4a = document.getElementById('box4a');
const box5a = document.getElementById('box5a');
const box2 = document.getElementById('box2');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const bookingLogo = document.getElementById("bookingLogo");
const pricingCards = document.querySelectorAll('.card-item');
const price1 = document.querySelector('.card-set .price-1');
const price2 = document.querySelector('.card-set .price-2');
const price3 = document.querySelector('.card-set .price-3');
const menu = document.getElementById("menu");
const line = document.querySelectorAll('.line');
const dividers = document.querySelectorAll('.title');

let isDefault = true;
let showOffNav = false;
let isDarkTheme = true;

if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
if (btnTheme2) btnTheme2.addEventListener('click', toggleTheme);
if (menu) menu.addEventListener('click', showMenu);

function showMenu() {
    showOffNav = !showOffNav;
    if (showOffNav) {
        offNav.style.display = 'block';
        document.body.style.overflow = 'hidden';
        customNavbar.classList.remove('scrolled-light', 'scrolled');
    } else {
        offNav.style.display = 'none';
        document.body.style.overflow = 'auto';
        customNavbar.classList.remove('scrolled-light', 'scrolled');
    }
    updateNavbarStyle();
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        offNav.style.display = 'none';
        document.body.style.overflow = 'auto';
        showOffNav = false;

        const hamburgerIcon = document.querySelector('.ham');
        hamburgerIcon.classList.remove('active');
    }

    updateNavbarStyle();
});

function toggleTheme() {
    isDefault = !isDefault;
    if (isDefault) {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    } else {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    }
    updateNavbarStyle();
}

function applyDarkTheme() {
    isDarkTheme = true;
    document.documentElement.style.setProperty('--bg-theme', 'black');
    document.documentElement.style.setProperty('--textColor', 'white');
    if (heroBg) heroBg.style.backgroundImage = "url('assets/img/hero-bg.png')";
    if (themeIcon) themeIcon.src = "assets/img/light-theme.png";
    if (themeIcon2) themeIcon2.src = "assets/img/light-theme.png";
    if (navLogo) navLogo.src = "assets/img/ad-astra-logo.svg";
    if (box2) box2.src = "assets/img/speed.png";
    if (box6) box6.src = "assets/img/starliner-vega-logo.png";
    if (box7) box7.src = "assets/img/starliner-vega-ix-dark.png";
    if (bookingLogo) bookingLogo.src = "assets/img/ad-astra-logo2.png";

    if (boxes.length > 0) {
        boxes.forEach(function (box) {
            box.style.background = "rgb(28, 28, 28)";
            box.style.border = "none";
        });
    }

    if(box1a){
        box1a.style.setProperty('background', 'linear-gradient(173deg, #141414 6.43%, #D99432 269.28%)');
    }
    if (box3a) box3a.style.background = "linear-gradient(0deg, #FF007B -310.6%, #141414 100%)";
    if (box3a) box3a.style.background = "linear-gradient(0deg, #FF007B -310.6%, #141414 100%)";
    if (box4a) box4a.style.background = "linear-gradient(140deg, #141414 36.81%, #5C5B5B 190.83%)";
    if (box5a) box5a.style.background = "linear-gradient(140deg, #141414 36.81%, #5C5B5B 190.83%)";

    pricingCards.forEach(function (card) {
        card.style.background = '#141414';
    });

    line.forEach(function (card) {
        card.style.stroke = 'white';
    });

    dividers.forEach(function (divider) {
        if (divider) {
            divider.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.13)', 'important');
        }
    });

    if (price1) price1.style.background = "linear-gradient(155deg, #131313 44%, #022271 106.82%)";
    if (price2) price2.style.background = "linear-gradient(155deg, #131313 44%, #464343 106.82%)";
    if (price3) price3.style.background = "linear-gradient(155deg, #131313 44%, #93351A 106.82%)";

    if (price1) price1.style.border = "none";
    if (price2) price2.style.border = "none";
    if (price3) price3.style.border = "none";

}

function applyLightTheme() {
    isDarkTheme = false;
    document.documentElement.style.setProperty('--bg-theme', 'white');
    document.documentElement.style.setProperty('--textColor', 'black');
    if (heroBg) heroBg.style.backgroundImage = "none";
    if (themeIcon) themeIcon.src = "assets/img/dark-theme.png";
    if (themeIcon2) themeIcon2.src = "assets/img/dark-theme.png";
    if (navLogo) navLogo.src = "assets/img/ad-astra-logo-light.svg";
    if (box2) box2.src = "assets/img/speed.png";
    if (box6) box6.src = "assets/img/starliner-vega-logo-light.png";
    if (box7) box7.src = "assets/img/starliner-vega-ix-light.png";
    if (bookingLogo) bookingLogo.src = "assets/img/ad-astra-logo2-light.png";

    if (boxes.length > 0) {
        boxes.forEach(function (box) {
            box.style.background = "transparent";
            box.style.border = "0.5px solid #B0B0B0";
        });
    }

    pricingCards.forEach(function (card) {
        card.style.background = 'transparent';
    });

    line.forEach(function (card) {
        card.style.stroke = 'black';
    });

    dividers.forEach(function (divider) {
        if (divider) {
            divider.style.setProperty('border-bottom', '1px solid #B0B0B0', 'important');
        }
    });

    if (price1) price1.style.background = "linear-gradient(160deg, #FFF 36.2%, #DADADA 102.36%)";
    if (price2) price2.style.background = "linear-gradient(160deg, #FFF 36.2%, #DADADA 102.36%)";
    if (price3) price3.style.background = "linear-gradient(160deg, #FFF 36.2%, #DADADA 102.36%)";

    if (price1) price1.style.border = "0.5px solid #B0B0B0";
    if (price2) price2.style.border = "0.5px solid #B0B0B0";
    if (price3) price3.style.border = "0.5px solid #B0B0B0";
}

function updateNavbarStyle() {
    if (showOffNav) {
        customNavbar.classList.remove('scrolled-light', 'scrolled');
        return;
    }

    if (window.scrollY > scrollThreshold) {
        customNavbar.classList.remove('scrolled-light', 'scrolled');

        if (isDarkTheme) {
            customNavbar.classList.add('scrolled');
        } else {
            customNavbar.classList.add('scrolled-light');
        }
    } else {
        customNavbar.classList.remove('scrolled-light', 'scrolled');
    }
}


window.addEventListener('scroll', updateNavbarStyle);

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    isDefault = false;
    applyLightTheme();
} else {
    isDefault = true;
    applyDarkTheme();
}

updateNavbarStyle();






